import { Link } from "react-router";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-500">
      <p className="text-red-500 font-bold text-2xl">HomePage</p>
      <Link to={"/about"}>
        <p>Go to about</p>
      </Link>
    </div>
  );
}

export default HomePage;
