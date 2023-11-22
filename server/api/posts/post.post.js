import Post from "~/server/models/post";

export default defineEventHandler(async(event)=>{


    const {newPost}=await readBody(event)
    console.log(newPost);
    const {title,content,author,category,subtitle,picture}= newPost;

    console.log(picture);

    const post = await Post.create({
                title: title,
                content: content,
                subtitle:subtitle,
                likes: [],
                picture: picture,
                author: author,
                category: category,
              });

              return{
                post
              }
              // console.log(readFormData(event));

})






// export const createPost = catchAsync(async (req, res) => {
//     const { title, content, author, categories } = req.body;
//     let uploadPath;
//     try {
//       if (!req.files || Object.keys(req.files).length === 0) {
//         return res.status(400).send({ error: "No file uploaded" });
//       }
//       const file = req.files.file;
//       const uniqueFilename = generateUniqueFilename();
//       let ext = file.name.split(".").slice(1)
//       console.log(ext)
//       let filePath = path.resolve(
//         path.dirname("") + `/src/uploads/posts/${uniqueFilename}` + "." + ext
//       );
//       file.mv(filePath, function (err) {
//         if (err) return res.status(500).send(err);
//       });
//       uploadPath = `/uploads/posts/${uniqueFilename}` + "." + ext;
//       const authorExists = await User.exists({ _id: author });
//       if (!authorExists) {
//         return res.status(400).send({ error: "author not exists" });
//       }
  
  
//       // Create the new post
//       const post = new Post({
//         title: title,
//         content: content,
//         likes: 0,
//         views: 0,
//         picture: uploadPath,
//         author: author,
//         categories: categories,
//       });
//       await post.save();
//       res
//         .status(201)
//         .json({ post: post, message: "New post created successfully" });
//     } catch (error) {
//       console.log(error);
//     }
  
  
//   });
  