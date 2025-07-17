import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token, // only allow if a session token exists
  },
});

// keep the same matcher list
export const config = {
  matcher: [
    '/((?!api/auth|signin|signup|auth/error|_next/static|_next/image|favicon.ico).*)',
  ],
};
