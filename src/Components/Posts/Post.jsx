
const Post = ({post}) => {
  const {title, id, body} = post
  return (
    <div className="bg-green-200 p-5 rounded-lg">
      <p>Id : {id}</p>
      <h2 className="font-bold">Title: {title}</h2>  
      <p>{body}</p>  
      
        
    </div>
  );
};

export default Post;