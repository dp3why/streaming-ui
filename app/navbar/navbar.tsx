"use client";
import Image from "next/image";
import Link from "next/link";
import SignIn from "./signIn";
import { useEffect, useState } from "react";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";
import Upload from "./upload";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <Image
          className="cursor-pointer"
          width={90}
          height={20}
          src="/youtube-logo.svg"
          alt="YouTube Logo"
        />
      </Link>
      {user && (
        <div>
          <Upload />
        </div>
      )}

      <SignIn user={user} />
    </nav>
  );
}
