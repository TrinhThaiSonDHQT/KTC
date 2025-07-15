import Tasks from '@/app/task-ssr/page';

// Server-side rendering to fetch Tasks
// This function will run on the server and fetch data before rendering the page

export default async function Home() {
  return <Tasks />
}

