// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../redis';
import { Message } from '../../typing';

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
if(req.method !== 'POST') {
  res.status(405).json({ body: 'Invalid API Method' })
  return;
}

//: ** Setup for sending Message **
const { message } = req.body;

const newMessage = {
  ...message,
  //: Replace timestamp with server timestamp
  created_at: Date.now(),
}

//: Adding hashed data to Upstash Redis
await redis.hset('messages', message.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage })
}