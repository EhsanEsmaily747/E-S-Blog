import User from "~/server/models/user";




export default defineEventHandler(async (event) => {

    const { newUser } = await readBody(event)
    const { username, email, password, isAdmin } = newUser
    const anonymous = '/anonymous.jpg'

    const existUser = await User.find({ email: email });
    if (existUser.length > 0) {
        return 'User Exist'
    }


    const createdUser = await User.create({
        username: username,
        email: email,
        password: password,
        picture: anonymous,
        isAdmin: isAdmin,
    });
    const token = jwt.sign(
        {
            id: createdUser._id,
            isAdmin: createdUser.isAdmin,
            pic: createdUser.picture,
            name: createdUser.username
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '3d'
        }
    )


    return {
        token
    }
})

