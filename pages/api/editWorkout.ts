import { initializeApp } from "firebase/app";
import adminAuthMiddleware from './middleware/adminAuth'; 
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
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
    if(req.method=='POST')
    {       
    try {
        await adminAuthMiddleware(req, res, async () => {
            const { workoutId } = req.query;
            const { updatedWorkout } = req.body;
    
            const workoutDocRef = doc(db, 'workout', workoutId as string);
            const workoutDocSnapshot = await getDoc(workoutDocRef);
    
            if (!workoutDocSnapshot.exists()) {
            return res.status(404).json({ error: "Workout split not found." });
            }
            const modifiedWorkoutData = { ...workoutDocSnapshot.data(), ...updatedWorkout };
            await updateDoc(workoutDocRef, modifiedWorkoutData);
    
            return res.status(200).json({ message: "Workout split updated successfully.", workoutData: modifiedWorkoutData });
        });
        } catch (error) {
        console.error("Error updating workout split:", error);
        return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
