import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData()
  const { id, name, website } = userDetails

  // Use Navigate 
  const navigate = useNavigate()

  const handleGoBackButton = () => {
    navigate(-1)
  }
  const handleGoHomeButton = () => {
    navigate('/')
  }
  const handleGoPostButton = () => {
    navigate('/posts')
  }

  return (
    <div className="bg-amber-200 ">
      <p>Id : {id}</p>
      <h2 className="text-2xl">Details of : {name}</h2>
      <p>Website : {website}</p>
      <div className="flex gap-3 justify-center">
        <button onClick={handleGoBackButton} className="btn">Go Back</button>
        <button onClick={handleGoHomeButton} className="btn">Go Home</button>
        <button onClick={handleGoPostButton} className="btn">Go Post</button>
      </div>
    </div>
  );
};

export default UserDetails;