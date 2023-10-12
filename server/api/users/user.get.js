import User from "~/server/models/user";


export default defineEventHandler(async( event)=>{
    const query=getQuery(event)
    const filter={}

    if(query.id)filter._id=query.id
    if(query.username)filter.username=query.username
    

    console.log(filter);
    const user=await User.find(filter)
    if(user.length!=0){
        return user
        
    }
    return 'User Not Found'

    // const users=await User.find()
    // return{
    //     users
    // }

})