// file: e.g: ~/server/api/session.get.ts
import { getServerSession } from '#auth'

export default eventHandler(async (event) => {
   const session = await getServerSession(event)
//    console.log(session);
   
   if (!session) {
      return { status: 'unauthenticated!' }
   }
   return { status: 'authenticated!', text: 'im protected by an in-endpoint check', session }
})