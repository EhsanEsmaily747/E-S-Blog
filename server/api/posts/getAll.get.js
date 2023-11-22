import Post from "~/server/models/post"

export default defineEventHandler(async (event) => {

const posts = await Post.find()
return posts.length;

})