import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req : NextApiRequest, res : NextApiResponse) {
    res.status(200).send({"message" : "Testing, testing...1,2,3?"})   
}