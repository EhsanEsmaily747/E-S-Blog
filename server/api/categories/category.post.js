import Category from "~/server/models/category";

export default defineEventHandler(async(event)=>{
  const {name}=await readBody(event)
  
  const exist=await Category.find({name})
  console.log(exist);

    if (exist.length>0) {
        return 'Category Already Exist'
    }
    const newCategory = await Category.create({
        name: name
      });
    
      return {
        newCategory
      }
})