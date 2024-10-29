import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const errorHappened = useRouteError()
  const { status, statusText, data, error } = errorHappened
  console.log(errorHappened);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 ">
      <p className="text-3xl">{status}!</p>
      <p>{statusText}</p>
      <p>{error.message}</p>
      <Link to='/'>
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;