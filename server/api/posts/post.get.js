import Post from "~/server/models/post";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let filter = {};

  if (query) {
    if (query.searchTerm) {
      let regex = new RegExp(query.searchTerm, "i");
      filter.$or = [{ title: regex }, { subtitle: regex }];
    }
  }

  try {
    let posts = await Post.find(filter)
      .populate("author")
      .populate("category")
      .exec();

    return {
      posts,
    };
  } catch (error) {
    return error;
  }
});

//       if (req.query.mostview) sorts.mostview = { mostview: -1 }
//       if (req.query.mostview) sorts.lessview = { mostview: 1 }
  