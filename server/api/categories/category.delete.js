
import Category from "~/server/models/category";

export default defineEventHandler(async(event)=>{
    const query=getQuery(event)

    const exist=await Category.findById(query.id)

    if (exist) {
        exist.deleteOne()
        return `Category ${exist} Deleted`
    }
    return `Category Doesn't Exit`
})


