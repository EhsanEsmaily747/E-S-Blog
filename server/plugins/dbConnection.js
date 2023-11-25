import mongoose from "mongoose";

export default async()=>{
    const config=useRuntimeConfig()

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log('Connected');
    } catch (error) {
        console.log('not connected',error);
    }
}