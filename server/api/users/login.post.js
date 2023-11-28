import User from "~/server/models/user";
import jwt from 'jsonwebtoken'

export default defineEventHandler(async( event)=>{
    const filter={}
    const {userData}=await readBody(event)
    
    filter.username = userData.username

    const user = await User.find(filter)
    
    if(user.length!=0){
        if(user[0].password == userData.password){
         
           const  token = jwt.sign(
                    { 
                    id: user[0]._id,
                    isAdmin: user[0].isAdmin,
                    pic: user[0].picture,
                    name: user[0].username
                    },
                    process.env.SECRET_KEY,
                    {
                     expiresIn: '3d'
                    }
            )
        
            return token
        
        }else{
            return 'Wrong Password'
        }
        
    }
    return 'Invalid Username'


})