import Comment from "~/server/models/comment";

export default defineEventHandler(async(event)=>{

    const{id}=getQuery(event);

    const comment = await Comment.findById(id);
    if (comment) {
        comment.deleteOne()
        return  `comment deleted`
    }
    return `Comment Does not exit`

})

