import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="grid justify-center mt-20">
      <div>
        <Image 
          className="object-contain" 
          height={200} 
          width={200}
          src="https://res.cloudinary.com/dwoifuutn/image/upload/v1668647181/logo-meta-circle-color_pwawbw.png" 
          priority={true}
          alt="Logo Meta Messaging" 
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage