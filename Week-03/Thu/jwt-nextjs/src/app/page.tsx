import { Suspense } from 'react';
import { requireAuth } from '@/lib/auth';
import TaskList from '@/components/ui/TaskList';
import UserNav from '@/components/ui/UserNav';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Dashboard() {
  // const session = await requireAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        {/* <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Welcome back, {session?.user?.name}
            </p>
          </div>
          <UserNav user={session.user} />
        </div> */}

        <Card>
          <CardHeader>
            <CardTitle>Task Management</CardTitle>
            <CardDescription>
              View, create, update, and delete tasks from your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense
              fallback={<div className="animate-pulse">Loading tasks...</div>}
            >
              <TaskList />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
