import { NextApiRequest, NextApiResponse } from 'next';

export default async function getWorkoutByDays(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { numberOfDays } = req.body;
      let workoutId="";
      // Validation for numberOfDays
      if (!numberOfDays || typeof numberOfDays !== 'number') {
        return res.status(400).json({ error: 'Number of days must be provided as a valid number' });
      }
      switch (numberOfDays) {
        case 2:
            workoutId="wn0QacWuF9cwXaHZIYTN"
            break;
        case 3:
            workoutId="Dl57RJDlZ1xF5SMVmbrz"
            break;
        case 4:
            workoutId="0PAG1XTaLsGjgrc2JeAr"
            break;
        case 5:
            workoutId="EOh0FHzncy6Gsbh5qTeI"
            break;
        case 6: 
            workoutId="Ces2dEIa0SIr9gbtUwLT"
            break;
      
      }  
      const response = await fetch(`http://localhost:3000/api/getWorkout?workoutId=${workoutId}`);
    //   const data = await response.json()
      const data=await response.json()
      console.log(data)
    return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving workouts by days:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }