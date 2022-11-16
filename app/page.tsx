import React from 'react'
import { Message } from '../typing';
import ChatInput from './ChatInput'
import MessageList from './MessageList'

async function HomePage() {
  //: Server//Side//Rendering
  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).then(
      (res) => res.json()
    );

    const messages: Message[] = data.messages;
    

  return (
    <main className="">
      <MessageList initialMessages={messages} />
      <ChatInput />
    </main>
  )
}

export default HomePage