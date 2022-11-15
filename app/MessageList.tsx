"use client";

import useSWR from "swr";
import { Message } from "../typing";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

function MessageList() {
  const {data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher);

  return (
    <div>
      {messages?.map((message) => (
        <div key={message.id} className="space-y-5 px-5 pt-4 sm:pt-8 pb-16 sm:pb-14 max-w-2xl xl:max-w-4xl mx-auto">
          <MessageComponent key={message.id} message={message} />
        </div>
      ))}
    </div>
  )
}

export default MessageList