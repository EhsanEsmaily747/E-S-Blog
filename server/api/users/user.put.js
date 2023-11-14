import User from "~/server/models/user";

export default defineEventHandler(async(event)=>{
    const query = getQuery(event)
    // console.log(await readBody(event));
    const {updatedUser}=await readBody(event);
console.log(query);
    
    try{
        const user= await User.findById(query.id)
        if(!user){
            // console.log(user);
          return `User Doesn't Exist`
        }
        user.username=updatedUser.username;
        user.email=updatedUser.email;
        user.password=updatedUser.password;
        user.picture=updatedUser.picture;
        user.isAdmin=updatedUser.isAdmin;

        user.save()
        return user
  
    }catch(err){
    return err
    }
})

