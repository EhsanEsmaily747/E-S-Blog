import Post from "~/server/models/post";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let filter = {};


  if (query.searchTerm) {
    let regex = new RegExp(query.searchTerm, "i");
    filter.$or = [{ title: regex }];
  }
  if (query.id) filter._id = query.id
  if (query.name) filter.author = query.name
  if (query.category) filter.category = query.category  

  let posts = await Post.find(filter).limit(10)
    .populate("author")
    .populate("category")
    .populate("comments")
    .exec();

  // console.log('posts' + posts);
  return {
    posts
  }

}
)