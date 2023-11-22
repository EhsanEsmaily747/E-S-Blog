import Post from "~/server/models/post";


export default defineEventHandler(async(event)=>{
    const query=getQuery(event)

    const {updatedPost}= await readBody(event)

    try {
        const post=await Post.findById(query.id);
        if (post) {
            post.title = updatedPost.title;
            post.content = updatedPost.content;
            post.picture = updatedPost.picture;
            post.author = updatedPost.author;
            post.category = updatedPost.category;
            post.likes=updatedPost.likes;
            post.comments=updatedPost.comments
          post.save();
        }
        return 'Post Updated'
    } catch (error) {
        return error
    }
})