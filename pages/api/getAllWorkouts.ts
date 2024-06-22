import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    try {
        const workoutsCollection = collection(db, 'workout');
        const workoutsSnapshot = await getDocs(workoutsCollection);

        const workoutsData = workoutsSnapshot.docs.map((doc) => doc.data());

        return res.status(200).json({ workoutsData });
    } catch (error) {
        console.error("Error retrieving all workouts:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
