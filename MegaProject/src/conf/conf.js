const conf = {
      appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
      appwritePROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
      appwriteDATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABADE_ID),
      appwriteTABLE_ID: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
      appwriteBUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf