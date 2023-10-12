import Comment from "~/server/models/comment";
import User from "~/server/models/user";

export default defineEventHandler(async(event)=>{

    const {postId,content,author}=await readBody(event)

    const user = await User.find({ author: author });
    if (user) {
        const newComment = await Comment.create({
                    content: content,
                    author: author,
                    postId: postId
                  });
        
        return {
            newComment
        }
    }
    return `You can't comment on this post`
})


