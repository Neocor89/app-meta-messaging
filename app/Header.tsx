import Image from 'next/image'
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { unstable_getServerSession } from "next-auth/next"

async function Header() {
  const session = await unstable_getServerSession();
  
  if(session) return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-blue-100 flex justify-between items-center p-5 sm:p-10 shadow-sm">
      <div className="flex space-x-2">
        <Image
        className="rounded-full mx-2 object-contain h-14 w-14" 
        height={20} 
        width={100}
        src={session.user?.image!}
        priority={true}
        alt="Profile picture" 
        />

        <div className="">
          <p className="text-gray-400 text-[12px] sm:text-[18px]">Logged in as :</p>
          <p className="font-bold text-[12px] md:text-lg sm:text-[19px]">{session.user?.name}</p>
        </div>
      </div>
      <LogoutButton />
    </header>
  )

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-blue-100 flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex items-center h-12">
          <Image src="https://res.cloudinary.com/dwoifuutn/image/upload/v1668364073/logo-unique-meta-messaging_f8xlqt.png" 
          className="h-22"
          alt='logo META Messaging'
          priority={true}
          height={20} 
          width={100} 
          />
        </div>
          <p className="text-gray-700 font-bold pb-2">META Messaging</p>
        <Link href="/auth/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</Link>
      </div>
    </header>
  )
}

export default Header