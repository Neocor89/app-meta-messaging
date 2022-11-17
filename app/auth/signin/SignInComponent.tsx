"use client";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>
}

function SignInComponent({providers}: Props) {
  return (
    <div className="sm:mt-16 mt-20 mx-auto">
      {Object.values(providers!).map((provider) => (

        <div key={provider.name}>
          <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-[12px] sm:text-[17px]" onClick={() => signIn(provider.id, {
            callbackUrl: process.env.VERCEL_URL || "http://localhost:3000"
          })}>
            Sign in with {provider.name}
          </button>
        </div>

      ))}
    </div>
  )
}

export default SignInComponent