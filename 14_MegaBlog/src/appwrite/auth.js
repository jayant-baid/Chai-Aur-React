import config from "../config/config";

import { Client, Account, ID } from "appwrite";

//Better code practice
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({email, password, name}){
    // eslint-disable-next-line no-useless-catch
    try{
        const userAccount = await this.account.create(ID.unique(), email, password, name);

        if(userAccount){
            return this.login({email, password})
        }
        else{
            return userAccount;
        }

    } catch(err){
        throw err;
    }
  }
  async login({email, password}){
    // eslint-disable-next-line no-useless-catch
    try {
        return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
        throw error;
    }
  }
  async getCurrentUser(){
    try {
        return await this.account.get()
    } catch (error) {
        console.log("Appwrite Service: getCurrentUser: error:: ",error);
    }

    return null;
  }

  async logout(){
    try {
        await this.account.deleteSessions();
        
    } catch (error) {
        console.log("Appwrite Service: logout: error:: ",error);
    }
  }
}

const authService = new AuthService();

export default authService;
