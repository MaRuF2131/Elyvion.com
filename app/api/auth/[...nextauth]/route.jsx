// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { setUserInterceptor } from "@/utils/api/axios";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        name: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          console.log("NextAuth credentials:", credentials);

          const res = await axios.post("http://localhost:4000/api/users/login", {
            name: credentials.name,
            password: credentials.password,
          });

          const data = res.data;
          console.log("Backend response:", data);

          if (!data?.success || !data?.data) {
            return null; //  REQUIRED
          }
          setUserInterceptor(data?.token); //  Set token for future API calls
          return {
            id: String(data?.data?.id), //  MUST be string
            name: data?.data?.userName,
            role: data?.data?.isAdmin ? "admin" : "user",
            token: data?.token || null,
          };
        } catch (err) {
          console.error("Authorize error:", err.response?.data || err);
          return null; //  NEVER throw
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.backendToken = user.token;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.token = token.backendToken;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
