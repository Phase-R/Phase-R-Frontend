import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const response = await fetch('http://localhost:8080/evaluate_answers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        // Check if the response is okay (status code 2xx)
        if (response.ok) {
            const data = await response.json();
            res.status(response.status).json(data);
        } else {
            // Handle non-2xx responses
            const errorData = await response.json();
            res.status(response.status).json({
                message: "Failed to submit answers.",
                error: errorData,
            });
        }
    } catch (error) {
        console.error('Error during fetch:', error);
        // Handle fetch errors (e.g., network errors)
        res.status(500).json({
            message: "An error occurred while submitting answers.",
            error: error.message,
        });
    }
}
