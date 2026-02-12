import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        

        <div className="flex items-center gap-2 text-blue-600 font-semibold">
          <span className="text-xl"><FaBookOpen /></span>
          <span>Interview Prep Board</span>
        </div>

        <nav className="flex gap-8 text-sm font-medium">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            Topics
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
