import User from "~/server/models/user";




export default defineEventHandler(async (event) => {
  
    const {newuser}=await readBody(event)
  const { username, email, password, isAdmin }=newuser
    const anonymous='/anonymous.jpg'

      const existUser = await User.find({ email:email });
      if (existUser.length>0) {
          return 'user Exist'
      }
 

      const newUser = await User.create({
            username: username,
            email: email,
            password: password,
            picture: anonymous,
            isAdmin: isAdmin,
          });
      return{
          newUser
      }
})

