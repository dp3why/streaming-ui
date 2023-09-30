"use client";
import React from "react";
import { signInWithGoogle, signOut } from "../firebase/firebase";
import { User } from "firebase/auth";
import Image from "next/image";

interface SignInProps {
  user: User | null;
}

const SignIn = ({ user }: SignInProps) => {
  return (
    <>
      {user && user.photoURL ? (
        <div className="flex flex-row ">
          <Image
            alt="profile"
            src={user.photoURL}
            className="rounded-full mx-2 "
            objectFit="cover"
            width={60}
            height={30}
          />
          <button className="signButton" onClick={signOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <button className="signButton" onClick={signInWithGoogle}>
          Sign In
        </button>
      )}
    </>
  );
};

export default SignIn;
