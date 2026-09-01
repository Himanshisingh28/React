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
    async createPost({ title, slug, content, featureImage, status, userId }) {
        try {
            return await this.databases.createDocument({
                databaseId: conf.appwriteDATABASE_ID,
                collectionId: conf.appwriteTABLE_ID,
                documentId: slug,
                data: {
                    title,
                    slug,
                    content,
                    featureImage,
                    status,
                    userId,
                },
            });
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
            return false;
        }
    }

    // Update Post
    async updatePost(slug, { title, content, featureImage, status }) {
        try {
            return await this.databases.updateDocument({
                databaseId: conf.appwriteDATABASE_ID,
                collectionId: conf.appwriteTABLE_ID,
                documentId: slug,
                data: {
                    title,
                    content,
                    featureImage,
                    status,
                },
            });
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
            return false;
        }
    }

    // Delete Post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument({
                databaseId: conf.appwriteDATABASE_ID,
                collectionId: conf.appwriteTABLE_ID,
                documentId: slug,
            });

            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    // Get Single Post
    async getPost(slug) {
        try {
            return await this.databases.getDocument({
                databaseId: conf.appwriteDATABASE_ID,
                collectionId: conf.appwriteTABLE_ID,
                documentId: slug,
            });
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    // Get All Posts
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments({
                databaseId: conf.appwriteDATABASE_ID,
                collectionId: conf.appwriteTABLE_ID,
                queries,
            });
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    // Upload File
    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBUCKET_ID,
                fileId: ID.unique(),
                file,
            });
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    // Delete File
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBUCKET_ID,
                fileId,
            });

            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    // Get File Preview
    getFilePreview(fileId) {
        return this.bucket.getFileView({
            bucketId: conf.appwriteBUCKET_ID,
            fileId,
        });
    }
}

const service = new Service();

export default service;