import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
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
  try {
    const { workoutId } = req.query;
    console.log(workoutId)

    const workoutDocRef = doc(db,'workout',workoutId as string);
    const workoutDocSnapshot = await getDoc(workoutDocRef);

    if (!workoutDocSnapshot.exists()) {
      return res.status(404).json({ error: "Workout split not found." });
    }

    const workoutData = workoutDocSnapshot.data();

    return res.status(200).json({ workoutData });
  } catch (error) {
    console.error("Error retrieving workout split:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
