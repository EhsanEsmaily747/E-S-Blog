import mongoose from "mongoose";

export default async()=>{
    const config=useRuntimeConfig()

    try {
        await mongoose.connect(config.mongodbUri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })
        console.log('Connected');
    } catch (error) {
        console.log('not connected',error);
    }
}