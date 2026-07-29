import conf from '../conf/conf.js';

import { Client, Account, ID } from "appwrite";

export class AuthService {
      client = new Client();
      account;

      constructor(){
            this.client
                 .setEndpoint(conf.appwriteURL) 
                 .setProject(conf.appwritePROJECT_ID);
            this.account = new Account(this.client);
      }
      async createAccount({emial, password, name}){
            try {
                  const userAccount = await this.account.create(ID.unique(), email, password, name);
                  if (userAccount) {
                        // call another method 
                        return this.login({email,password});
                        
                  } else {
                        return userAccount;
                  }
            } catch (error) {
                  throw error;
            }
      }
      async login({email, password}){
            try {
                  await this.account.createAnonymousSession(email,password);
            } catch (error) {
                  throw error;
                  
            }
      }
      async getCurrentUser() {
         try {
            return await this.account.get();
         } catch (error) {
            console.log("Appwrite servie :: getCurrentUser :: error", error);
         } 
         
         return null;
      }
      async logout(){
            try {
                  await this.account.deleteSessions();
            } catch (error) {
                  console.log("Appwrite service :: logout :: error", error);
            }
      }
}
const authservice = new AuthService(); 

export default authservice