'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Oops! Something went wrong
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              We encountered an unexpected error. This has been logged and we're
              looking into it.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                Error Details:
              </h4>
              <p className="text-sm text-gray-600 font-mono break-all">
                {error.message || 'An unexpected error occurred'}
              </p>
              {error.digest && (
                <p className="text-xs text-gray-500 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            <div className="text-sm text-gray-600">
              <p>
                If this problem persists, please contact support with the error
                ID above.
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button
              onClick={reset}
              className="flex-1 flex items-center justify-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
            <Button
              variant="outline"
              asChild
              className="flex-1 flex items-center justify-center gap-2 bg-transparent"
            >
              <Link href="/">
                <Home className="h-4 w-4" />
                Go home
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Additional help section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Need help?</p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link
              href="/support"
              className="text-blue-600 hover:text-blue-500 hover:underline"
            >
              Contact Support
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/status"
              className="text-blue-600 hover:text-blue-500 hover:underline"
            >
              System Status
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
