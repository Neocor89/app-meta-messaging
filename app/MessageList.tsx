"use client";

import { useEffect } from "react";
import useSWR from "swr";
import { clientPusher } from "../pusher";
import { Message } from "../typing";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

type Props = {
  initialMessages: Message[];
}

function MessageList({initialMessages}: Props) {
  const {data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");

    channel.bind("new-message", async (data: Message) => {
      //: No updating Cached Message
      if(messages?.find(message => message.id === data.id)) return;

      if(!messages) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        })
      }

      return () => {
        channel.unbind_all();
        channel.unsubscribe();
      }
    })
  }, [messages, mutate, clientPusher])
  
  return (
    <div>
      {messages?.map((message) => (
        <div key={message.id} className="space-y-5 px-5 pt-4 sm:pt-8 pb-16 sm:pb-14 max-w-2xl xl:max-w-4xl mx-auto">
          <MessageComponent key={message.id} message={message || initialMessages} />
        </div>
      ))}
    </div>
  )
}

export default MessageList