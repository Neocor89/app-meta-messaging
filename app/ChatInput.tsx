"use client";
import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuidv4 } from 'uuid';
import { Message } from "../typing";
import fetcher from "../utils/fetchMessages";


function ChatInput() {
  const [input, setInput] = useState("");
  //: Fetch Data and Store in cache
  const {data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  
  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!input) return;

    const messageSend = input;

    setInput('')

    const id = uuidv4();

    const message: Message = {
      id,
      message: messageSend,
      created_at: Date.now(),
      username: "Ben Devweb",
      profilePic: "https://res.cloudinary.com/dwoifuutn/image/upload/v1666286613/bendev-messenger-logo_z4pgnu.png",
      email: "bendevweb@gmail.com",
    }

    const uploadMessageToUpstash = async () => {
      const data = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message
        }),
      }).then(res => res.json())

      
      return [data.message, ...messages!];
    }

    await mutate(uploadMessageToUpstash, {
      optimisticData: [message, ...messages!],

      //: Error = Previous cache value
      rollbackOnError: true,
    });
  };

  return (
    <form onSubmit={addMessage} className="fixed bottom-0 w-full z-50 flex px-3 md:px-6 py-5 space-x-2 border-t border-gray-200 bg-white">
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your message here..." 
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed" 
      />
      <button 
        type="submit" 
        disabled={!input}
        className="bg-gradient-to-r from-blue-700 to-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-6 sm:px-8 rounded text-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput