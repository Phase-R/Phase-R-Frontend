import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { VerifyErrors, Secret } from 'jsonwebtoken';

interface ExtendedNextApiRequest extends NextApiRequest {
  userId?: string;
}

const middleware = (req: ExtendedNextApiRequest, res: NextApiResponse, next: () => void) => {
  const token = req.headers['x-access-token'];

  if (token) {
    jwt.verify(token as string, process.env.JWT_SECRET as Secret, (err: VerifyErrors | null, decoded: any) => {
      if (err) {
        return res.status(403).json({ error: 'Failed to authenticate token' });
      }

      req.userId = (decoded as { userId: string }).userId;
      next();
    });
  } else {
    res.status(401).json({ error: 'No token provided' });
  }
};

export default middleware;
