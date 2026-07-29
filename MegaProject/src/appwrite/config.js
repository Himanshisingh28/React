import conf from '../conf.js';

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
      client = new Client();
      databases;
      bucket;
      constructor() {
            this.client
                  .setEndpoint(conf.appwriteURL)
                  .setProject(conf.appwritePROJECT_ID);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client)
      }
      async createPost({ title, slug, content, featuredImage, status, userId }) {
            try {
                  return await this.databases.createDocument(
                        conf.appwriteDATABASE_iD,
                        conf.appwriteTABLE_ID,
                        slug,
                        {
                              title,
                              slug,
                              content,
                              featuredImage,
                              status,
                              userId,
                        }
                  )
            } catch (error) {
                  console.log("Appwrite servie :: getCurrentUser :: error", error);

            }
      }
      async updatePost(slug, { title, content, featuredImage, status }) {
            try {
                  return await this.databases.updateDocument(conf.appwriteDATABASE_iD,
                        conf.appwriteTABLE_ID,
                        slug,{
                        title,
                        content,
                        featuredImage,
                        status,
                  }
                  )
            } catch (error) {
                  console.log("Appwrite service :: updatePost :: error", error);

            }
      }
      async deletePost(slug){
            try {
                  await this.databases.deleteDocument(
                        conf.appwriteDATABASE_iD,
                        conf.appwriteTABLE_ID,
                        slug

                  )
                  return true
            } catch (error) {
                  console.log("Appwite serviced:: deletpost:: error", error);
                  return false
                  
            }
      }

      async getPost(slug){
            try {
                  return await this.databases.getDocument(
                        conf.appwriteDATABASE_iD,
                        conf.appwriteTABLE_ID,
                        slug
                  )
            } catch (error) {
                  console.log("Appwirte serrvice :: getPost :: error", error);
                  return false
            }
      }

      async getPost(queries = [Query.equal("status", "active")]) {
            try {
                  return await this.databases.listDocuments(conf.appwriteDATABASE_iD,
                  conf.appwriteTABLE_ID,
                  queries,

                  )
            } catch (error) {
                  console.log("appwrite :: getPost:: error", error)
                  return false
            }
      }
      // file upload file
      async uploadFile(file){
            try {
                  return await this.bucket.createFile(conf.appwriteBUCKET_ID, ID.unique(), file)
            } catch (error) {
                  console.log("Appwrite service :: uploadFile :: error", error);
                  return false
            }
      }
      async deleteFile(fileId){
            try {
                  return await this.bucket.deleteFile(conf.appwriteBUCKET_ID, fileId)
                  return true
            } catch (error) {
                  console.log("Appwrite service :: deleteFile :: error", error);
                  return false
            }
      }

      async getFilePreview(fileId){
            return this.bucket.getFilePreview(conf.appwriteBUCKET_ID, fileId)
      }
}

const service = new Service()
export default Service