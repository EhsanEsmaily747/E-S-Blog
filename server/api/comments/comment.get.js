import Comment from "~/server/models/comment";

export default defineEventHandler(async(event)=>{
    
    const query=getQuery(event);
    const filter={}
    filter.postId=query.id
    
    const comments=await Comment.find(filter)

    return {
        comments
    }
})


  
  