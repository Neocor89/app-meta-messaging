"use client";
import { SessionProvider } from "next-auth/react";

export function Providers({session, Children}: any) {
  return <SessionProvider session={session}>{Children}</SessionProvider>
}