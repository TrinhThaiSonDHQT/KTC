import Link from 'next/link';

// Server-side rendering to fetch Tasks
// This function will run on the server and fetch data before rendering the page

export default async function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className='flex flex-col items-center gap-2'>
        <span className="text-3xl font-semibold">
          Please navigate to link /admin to get more!
        </span>
        <Link
          href="/admin"
          className="text-2xl text-white font-semibold p-3 bg-blue-500 rounded-xl w-fit"
        >
          Admin Page
        </Link>
      </div>
    </div>
  );
}
