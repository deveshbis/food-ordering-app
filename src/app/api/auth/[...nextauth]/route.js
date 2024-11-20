import CredentialsProvider from "next-auth/providers/credentials"

import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            username: { label: "Email", type: "email", placeholder: "email@example.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // (i.e., the request IP address)
            const res = await fetch("/your/endpoint", {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" }
            })
            const user = await res.json()
      
            // If no error and we have user data, return it
            if (res.ok && user) {
              return user
            }
            // Return null if user data could not be retrieved
            return null
          }
        })
      ]
})

export { handler as GET, handler as POST }