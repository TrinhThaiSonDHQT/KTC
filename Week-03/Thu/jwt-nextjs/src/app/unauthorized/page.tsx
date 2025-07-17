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
import { Shield, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="text-center">
          <CardHeader className="pb-4">
            <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 mb-4">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Access Denied
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              You don't have permission to access this resource.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-sm text-gray-600">
              This page requires specific permissions that your account doesn't
              have. Please contact your administrator if you believe this is an
              error.
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
                Dashboard
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
