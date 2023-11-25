import User from "~/server/models/user";


export default defineEventHandler(async( event)=>{
    const query=getQuery(event)
    const filter={}

    if (query.searchTerm) {
        let regex = new RegExp(query.searchTerm, "i");
        filter.$or = [{ username: regex }];
      }

    if(query.id)filter._id=query.id
    if(query.username)filter.username=query.username
    if(query.email)filter.email=query.email
    

    // console.log(filter);
    const user=await User.find(filter)
    // console.log(user);
    if(user.length!=0){
        return user
        
    }
    return 'User Not Found'


})