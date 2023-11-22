
import Comment from "~/server/models/comment";
export default defineEventHandler(async(event)=>{

    const {newCmt}=await readBody(event)

    // const user = await User.find({ author: newCmt.author });
    console.log(newCmt);
    
        const newComment = await Comment.create({
                    content: newCmt.content,
                    author: newCmt.author,
                    postId: newCmt.postId
                  });
        
        return {
            newComment
        }
})


