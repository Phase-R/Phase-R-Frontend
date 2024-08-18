import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Allow requests from http://localhost:8080
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        // Forward the GET request to the external API
        const response = await fetch('http://localhost:8080/fetch_questions', {
            method: 'GET'
        });

        if (!response.ok) {
            const errorText = await response.text(); // Read the response text
            console.log('Error response:', errorText);
            return res.status(response.status).json({ error: errorText });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
