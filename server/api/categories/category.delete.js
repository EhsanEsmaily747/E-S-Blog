
import Category from "~/server/models/category";
import Post from '~/server/models/post'

export default defineEventHandler(async(event)=>{
    const query=getQuery(event)
    const filter = {}
    const exist=await Category.findById(query.id)

    if (exist) {
        exist.deleteOne()
        filter.category=query.id
        const posts = await Post.find(filter)

        for (let index = 0; index < posts.length; index++) {
            posts[index].category='65576fedfbdf37c88b835229'
            posts[index].save()  
        }
        return `Category ${exist} Deleted`
    }
    return `Category Doesn't Exit`
})


