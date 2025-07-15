import Link from 'next/link';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="flex items-stretch m-6 min-h-[500px] border-1 border-solid border-gray-300 rounded-lg">
      {/* Side bar */}
      <section className="border-r-1 border-solid border-gray-200 h-full">
        <p className="text-xl font-bold px-6 py-3">Admin Panel</p>
        <ul className="flex flex-col gap-1">
          <li className="hover:bg-gray-200 text-lg font-semibold px-6 py-3 cursor-pointer rounded">
            <Link href="/admin/task-ssr">Task SSR</Link>
          </li>
          <li className="hover:bg-gray-200 text-lg font-semibold px-6 py-3 cursor-pointer rounded">
            <Link href="/admin/task-ssg">Task SSG</Link>
          </li>
          <li className="hover:bg-gray-200 text-lg font-semibold px-6 py-3 cursor-pointer rounded">
            <Link href="/admin/task-csr">Task CSR</Link>
          </li>
        </ul>
      </section>

      {/* Main content */}
      <section className="flex-1 bg-gray-100">
        <div className="border-b-1 border-solid border-gray-200 px-6 py-3 bg-white">
          <span className="text-xl font-bold ">Dashboard</span>
        </div>
        <div className="bg-white  mx-6 my-4 rounded-lg h-[500px] overflow-y-auto">
          {children}
        </div>
      </section>
    </main>
  );
};

export default layout;
