import Image from "next/image";
import { Message } from "../typing";

type Props = {
  message: Message;
}

function MessageComponent({ message }: Props) {

  const isUser = true;

  return (
    <div className={`flex flex-col w-fit sm:flex-row ${isUser && "ml-auto"}`}>
      <div className={`flex-shrink-0 ${isUser && "order-2"}`}>
      <Image
        className="rounded-full mx-2 object-contain h-14 w-14" 
        height={20} 
        width={100}
        src={message.profilePic} 
        priority={true}
        alt="Profile picture" 
        />
      </div>

      <div>
        <p className={`text-[0.75rem] px-2 pb-[6px] sm:pb-[2px] ${isUser ? "text-blue-500 text-right" : "text-red-400 text-left" }`}>
          {message.username}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end">
          <div>
          <p className={`px-3 py-2 rounded-lg w-fit text-white bg-blue-500 text-[12px] ${isUser ? "bg-blue-500 ml-auto order-2" : "bg-red-400 text-left" }`}>
            {message.message}
          </p>
          </div>

          <p className={`text-[0.75rem] italic py-2 px-1 sm:px-2 text-gray-500 ${isUser && "text-right" }`}>
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessageComponent