import './globals.css'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold">Welcome to SheetFan!</h1>
      <div className="mt-4 flex space-x-4"> {/* Flex container with spacing */}
        <Link href="/signin">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Sign In
          </button>
        </Link>
        <Link href="/register">
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </main>
  );
}
