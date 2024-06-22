// adminLoginController.ts
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, query, where, collection } from "firebase/firestore";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { NextApiRequest, NextApiResponse } from "next";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', 'localhost');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const email = req.body.email;
  const password = req.body.password;

  const qAdmin = query(collection(db, 'adminAccess'), where('email', '==', email));
  const adminQuerySnapshot = await getDocs(qAdmin);

  if (adminQuerySnapshot.size === 0) {
    res.status(401).json({ message: "Admin Not Found" });
  } else {
    const adminData = adminQuerySnapshot.docs[0].data();
    const hashedPasswordInDB = adminData.password;

    const passwordMatch = await bcrypt.compare(password, hashedPasswordInDB);

    if (passwordMatch) {
      const adminToken = jwt.sign({ email: adminData.email, role: "admin" }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Admin Found", adminToken });
    } else {
      res.status(401).json({ message: "Incorrect password" });
    }
  }
}
