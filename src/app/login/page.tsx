'use client'
import { auth } from "@/modules/Firebase";
import FirebaseAuth from "@/modules/shared/FirebaseAuth"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [user] = useAuthState(auth);
  const Router = useRouter();

  // Redirect to home if user is authenticated
  useEffect(() => {
    if (user) {
      Router.push('/');
    }
  }, [user, Router]);

  return (
    <div>
      {!user && (
        <div className="flex flex-col items-center justify-center h-screen mx-auto my-auto">
          <h1 className="text-4xl font-bold">This page is protected</h1>
          <p className="text-gray-500 mt-4">
            The page you tried to access is protected. Please log in to access it.
          </p>
          <FirebaseAuth />
        </div>
      )}
    </div>
  );
}
