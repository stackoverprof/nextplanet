import admin from 'firebase-admin'

const adminConfig = {
    credential: admin.credential.cert({
        type: "service_account",
        project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
        private_key_id: process.env.SERVICE_PRIVATE_KEY_ID,
        private_key: process.env.SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.SERVICE_CLIENT_EMAIL,
        client_id: process.env.SERVICE_CLIENT_ID,
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-3pd8n%40areks-gm.iam.gserviceaccount.com"
      })
  }

if (!admin.apps.length) admin.initializeApp(adminConfig)

export default admin
export const DB = admin.firestore()