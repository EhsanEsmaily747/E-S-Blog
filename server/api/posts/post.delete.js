import Post from "~/server/models/post";

export default defineEventHandler(async(event)=>{
    const query=getQuery(event);
    const Exist=await Post.findById(query.id)
    if (Exist) {
         Exist.deleteOne()
        return 'Post Deleted'
    }
    return `Post doesn't exist`

})