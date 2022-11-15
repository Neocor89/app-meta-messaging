// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../redis';
import { Message } from '../../typing';

type Data = {
  messages: Message[];
};

type ErrorData = {
  body: string;
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
if(req.method !== 'GET') {
  res.status(405).json({ body: 'Invalid API Method' })
  return;
}

//: ** Setup for Message data recovery **

//: Recover hashed data Message
const messagesRes = await redis.hvals('messages');

/* 
 : Parse the Recovered string Message data 
 : Calculate timestamp Message 
*/
const messages: Message[] = messagesRes.map((message) => JSON.parse(message)).sort((a, b) => b.created_at - a.created_at);

  res.status(200).json({ messages })
}