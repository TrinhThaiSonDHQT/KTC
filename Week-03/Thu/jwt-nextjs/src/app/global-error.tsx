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
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            <Card className="text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Application Error
                </CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  A critical error occurred that prevented the application from
                  loading properly.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 text-left">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">
                    Error Details:
                  </h4>
                  <p className="text-sm text-gray-600 font-mono break-all">
                    {error.message || 'A critical application error occurred'}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-gray-500 mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>

                <div className="text-sm text-gray-600">
                  <p>
                    Please try refreshing the page. If the problem persists,
                    contact support.
                  </p>
                </div>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Reload Application
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </body>
    </html>
  );
}
