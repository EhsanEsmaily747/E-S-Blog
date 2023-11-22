import Post from "~/server/models/post"

export default defineEventHandler(async (event) => {
    const posts = await Post.find().sort({ createdAt: -1}).limit(10)
    // console.log(posts);
    return posts 
})