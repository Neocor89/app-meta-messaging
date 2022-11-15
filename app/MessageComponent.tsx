import Image from "next/image";
import { Message } from "../typing";

type Props = {
  message: Message;
}

function MessageComponent({ message }: Props) {
  return (
    <div className="flex w-fit">
      <div className="flex-shrink-0">
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
        <p className="text-[0.75rem] px-[2px] pb-[2px] text-blue-500">{message.username}</p>

        <div className="flex items-end">
          <div>
          <p className="px-3 py-2 rounded-lg w-fit text-white bg-blue-500">{message.message}</p>
          </div>

          <p className="text-[0.75rem] italic py-2 text-gray-500">{new Date(message.created_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}

export default MessageComponent