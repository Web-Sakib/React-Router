
const PostDetails = () => {



  const {id, title, body} = post

  return (
    <div>
      <p>id : {id}</p>
      <h2>Title : {title}</h2> 
      <p>{body}</p>     
    </div>
  );
};

export default PostDetails;