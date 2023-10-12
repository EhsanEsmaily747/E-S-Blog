import Category from "~/server/models/category";



export default defineEventHandler(async(event)=>{
    const cats= await Category.find()

    if(cats){
        return{
            cats
        }
}

    return 'There is no Category'

})