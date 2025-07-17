'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FileQuestion className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Page Not Found
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              The page you're looking for doesn't exist or has been moved.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
            <p className="text-sm text-gray-600">
              This could be due to a mistyped URL, an outdated link, or the page
              may have been removed.
            </p>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="flex-1 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go back
            </Button>
            <Button
              asChild
              className="flex-1 flex items-center justify-center gap-2"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Go home
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Quick navigation */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Quick links:</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-500 hover:underline"
            >
              Dashboard
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-500 hover:underline"
            >
              Sign In
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/support"
              className="text-blue-600 hover:text-blue-500 hover:underline"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
