



// file: ~/server/api/auth/[...].ts
import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: process.env.SECRET_KEY,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!

        // const data = await $fetch(`/api/users/user?username=${credentials.username}`)
        // Any object returned will be saved in `user` property of the JWT
        const user = {
          name: {
            id: credentials.id,
            isAdmin: credentials.isAdmin,
            pic: credentials.pic,
            name: credentials.name,
            email: credentials.email
          }
        }
        return user
      }
    }
    )
  ],
})
