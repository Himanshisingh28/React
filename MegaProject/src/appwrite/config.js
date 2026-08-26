import conf from "../conf/conf";
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
        this.bucket = new Storage(this.client);
    }

    // Create Post
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDATABASE_ID,
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
            );
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    // Update Post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDATABASE_ID,
                conf.appwriteTABLE_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    // Delete Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDATABASE_ID,
                conf.appwriteTABLE_ID,
                slug
            );

            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    // Get Single Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDATABASE_ID,
                conf.appwriteTABLE_ID,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    // Get All Posts
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDATABASE_ID,
                conf.appwriteTABLE_ID,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // Upload File
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBUCKET_ID,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // Delete File
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBUCKET_ID,
                fileId
            );

            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // Get File Preview
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBUCKET_ID,
            fileId
        );
    }
}

const service = new Service();

export default service;