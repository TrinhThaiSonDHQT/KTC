import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { User } from '@/types';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Replace this with your actual user authentication logic
        // This could be a database query, API call, etc.
        const user = await authenticateUser(
          credentials.email,
          credentials.password
        );

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
    error: '/auth/error',
  },
  // callbacks: {
  //   async jwt({ token, user }: {token: JWT, user: User}) {
  //     if (user) {
  //       token.role = user.role
  //     }
  //     return token
  //   },
  //   async session({ session, token }) {
  //     if (token) {
  //       session.user.id = token.sub!
  //       session.user.role = token.role as string
  //     }
  //     return session
  //   },
  // },
};

// Mock user authentication function - replace with your actual implementation
async function authenticateUser(email: string, password: string) {
  // Simulate database lookup
  const users = [
    {
      id: '1',
      email: 'admin@example.com',
      password: 'password', // In production, this should be hashed
      name: 'Admin User',
      role: 'admin',
    },
    {
      id: '2',
      email: 'user@example.com',
      password: 'password',
      name: 'Regular User',
      role: 'user',
    },
  ];

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    // Remove password from returned user object
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
