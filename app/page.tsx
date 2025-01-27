import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <div className="w-full bg-slate-900 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">Clerk</h1>
          <div>
            <SignedOut>
              <SignInButton>
                <button className="bg-gray-300 text-slate-900 px-4 py-2 rounded shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-700">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>

      <div className="flex-grow container mx-auto px-4 py-10 text-center">

        <h1 className="text-5xl font-extrabold text-slate-900 mb-6">
          Welcome to Clerk
        </h1>
        <p className="text-lg text-slate-800 mb-8">
          The most comprehensive User Management Platform
        </p>
        <button className="bg-slate-900  text-white px-6 py-3 rounded shadow-md hover:bg-white hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700 hover:border-slate-900">
          Learn More
        </button>

      </div>

      <div className="w-full bg-slate-900  text-white p-4 text-center">
        <p className="text-sm">© 2024 My App. All rights reserved.</p>
      </div>

    </div>
  );
}
