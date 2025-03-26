'use client';

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week9LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (err) {
      console.error("GitHub sign-in error:", err);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen py-12 bg-gray-100">
      <div className="w-full max-w-2xl px-4">
        {!user ? (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-center">Welcome to the Shopping List App</h1>
            <div className="flex justify-center">
              <button
                onClick={handleSignIn}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
              >
                Login with GitHub
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-xl text-center mb-6">
              Welcome, <strong>{user.displayName}</strong>
            </p>
            <p className="text-gray-600 text-center mb-8">{user.email}</p>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/week-9/shopping-list"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300 text-center w-full max-w-xs"
              >
                Go to your Shopping List
              </Link>
              <button
                onClick={handleSignOut}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors duration-300 w-full max-w-xs"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
