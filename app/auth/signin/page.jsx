"use client";

import React from "react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/register");
  }

  const handleSignIn = (provider) => {
    signIn(provider, { callbackUrl: "/register" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-zinc-800 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 sm:p-14 w-[90%] max-w-md text-white">
        <h1 className="text-4xl font-bold mb-6 text-gold text-center">Welcome Back</h1>
        <p className="text-gray-300 text-sm mb-8 text-center">
          Choose a provider to sign in and unlock your exclusive access.
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleSignIn("google")}
            className="w-full flex items-center justify-center gap-3 bg-green-200 text-black py-3 px-6 rounded-full hover:bg-green-400 transition duration-300 font-medium text-lg"
          >
            <FaGoogle /> Sign in with Google
          </button>

          <button
            onClick={() => handleSignIn("github")}
            className="w-full flex items-center justify-center gap-3 bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-black transition duration-300 font-medium text-lg"
          >
            <FaGithub /> Sign in with GitHub
          </button>

          <button
            className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 font-medium text-lg"
          >
            <FaFacebook /> Sign in with Facebook
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-300">
          <p>
            Not a member? <span className="text-yellow-300 cursor-pointer hover:underline">Join now</span>
          </p>
        </div>

        <p className="text-[10px] text-gray-400 mt-6 text-center">
          By signing in, you agree to our <span className="underline">Privacy Policy</span> & <span className="underline">Terms of Use</span>.
        </p>
      </div>
    </main>
  );
};

export default SignInPage;
