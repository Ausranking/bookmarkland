"use client";
import { signIn, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const handleSignIn = (provider) => {
    signIn(provider);
  };
  console.log(session?.user);
  return (
    <div className=" h-screen grid place-items-center">
      <h1 className="text-emerald-500">Sign In Here </h1>

      {session && <p>Welcome, {session.user.name}!</p>}
    </div>
  );
};

export default page;
