import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full rounded p-4 bg-gradient-to-bl bg-slate-800 text-white  ">
      <div className="w-full flex justify-between items-center ">
        <Link to={"/#"}>{"<Blogrammers/>"}</Link>
        <nav className="flex gap-5 items-center justify-center">
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/blog"}>Blog</Link>
        </nav>
        <button className="bg-blue-700  rounded-lg text-white hover:bg-blue-800 px-5 py-2 text-xl space-x-5 shadow-md">
          login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
