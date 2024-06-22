import { initializeApp } from "firebase/app";
import { getFirestore , doc, setDoc,getDoc } from "firebase/firestore";
import bcrypt from "bcrypt";
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
    if (req.method === 'POST') {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const userData = {
            ...req.body,
            password: hashedPassword,
        };
    
        try {
            const userRef = doc(db, 'users', userData.email);
            const userSnap = await getDoc(userRef);
    
            if (userSnap.exists()) {
                res.status(400).send("Email already exists.");
            } else {
                await setDoc(userRef, userData);
                res.status(200).send("User Registered.");
            }
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).send("Error creating user.");
        }
    } else {
        res.status(405).send("Method Not Allowed");
    }
}