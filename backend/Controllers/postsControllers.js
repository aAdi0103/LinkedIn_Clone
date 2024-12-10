import Post from "../Models/postModel.js";
export const getFeedPosts = async function (req, res) {
  try {
    const posts = await Post.find({})
    // .populate() is a method used to replace references (usually ObjectIds) in a document with the actual data from the referenced collection.
      .populate("author", "name username profilePicture headline")
      .populate("comments.user", "name profilePicture")
      .sort({ createdAt: -1 });
      res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getFeedPosts: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createPosts = function(req,res){

}
