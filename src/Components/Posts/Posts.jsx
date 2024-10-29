import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData()
  return (
    <div className="bg-slate-200">
      <h2>Post</h2>
      <div className="grid grid-cols-2 gap-3">
        {
          posts.map(post => <Post key={post.id} post={post}></Post> )
        }
      </div>
    </div>
  );
};

export default Posts;