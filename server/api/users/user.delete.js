import User from "~/server/models/user";

export default defineEventHandler(async(event)=>{
        const query=getQuery(event);
          const user=await User.findById(query.id);
          
          if(user){
             user.deleteOne()
             return 'User Deleted'
          }
          return `User Does not Exist`
        
      

})