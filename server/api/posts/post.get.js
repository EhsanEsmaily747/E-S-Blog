
import Post from "~/server/models/post";

export default defineEventHandler(async(event)=>{
    const query= getQuery(event)
    let filter={}
    // let sorts={}
    
    if (query) {
        if(query.category) filter.category=query.category
        if(query.name) filter.author=query.name
        if(query.id)filter._id=query.id
        if(query.title) filter.title=query.title
            
    }
    try {
        let posts= await Post.find(filter)
            .populate('author')
            .populate('category')
            .exec()
    
            return{
                posts
            }
        
    } catch (error) {
        return error;
    }
})

//       if (req.query.mostview) sorts.mostview = { mostview: -1 }
//       if (req.query.mostview) sorts.lessview = { mostview: 1 }
  