import tulogo from "../assets/tulogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    "Home",
    "Resources",
    "Projects",
    "People",
    "Publications",
    "Patents",
    "TOT",
    "Contact Us",
  ];
  return (
    <nav className="bg-blue-950 text-white relative z-50">
      
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-6 md:py-8">
        <div className="flex items-center space-x-4 md:space-x-6">
          <img src={tulogo} alt="Logo" className="w-20 h-20 md:w-24 md:h-24" />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide font-serif">
              Sensors, Measurements and Instrumentation Research Lab
            </h1>
            <h2 className="text-base md:text-lg font-medium tracking-wide font-serif">Department of Electrical Engineering</h2>
            <h3 className="text-sm md:text-base font-small tracking-wide font-serif lining-nums">Tezpur University, India-784028</h3>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0b4a7a]">
        <div className="container mx-auto px-6">
          <ul className="flex flex-wrap gap-5 text-sm font-medium mt-0 py-2">
            {menuItems.map((item) => {
              const id = item.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              if (item === "Home") {
                return (
                  <li key={item} className="hover:underline cursor-pointer">
                    <Link to="/" className="block px-2 py-1 text-sky-100">{item}</Link>
                  </li>
                );
              }
              if (item === "Resources") {
                return (
                  <li key={item} className="hover:underline cursor-pointer">
                    <Link to="/resources" className="block px-2 py-1 text-sky-100">{item}</Link>
                  </li>
                );
              }
              if (item === "Projects") {
                return (
                  <li key={item} className="relative group">
                    <button
                      className="block px-2 py-1 text-sky-100 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >  
                      <span className="inline-flex items-center">
                        {item}
                        <svg
                          className="w-3 h-3 ml-1 text-sky-100"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul className="absolute left-0 mt-2 w-48 bg-blue-950 text-white rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transform scale-95 group-hover:scale-100 group-focus-within:scale-100 transition-all pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                      <li>
                        <Link to="/projects#ongoing-projects" className="block px-4 py-2 hover:bg-blue-800">
                          Ongoing Projects
                        </Link>
                      </li>
                      <li>
                        <Link to="/completed-projects" className="block px-4 py-2 hover:bg-blue-800">
                          Completed Projects
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              }
              if (item === "People") {
                return (
                  <li key={item} className="relative group">
                    <button
                      className="block px-2 py-1 text-sky-100 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="inline-flex items-center">
                        {item}
                        <svg
                          className="w-3 h-3 ml-1 text-sky-100"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul className="absolute left-0 mt-2 w-48 bg-blue-950 text-white rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transform scale-95 group-hover:scale-100 group-focus-within:scale-100 transition-all pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                      <li>
                        <Link to="/faculty" className="block px-4 py-2 hover:bg-blue-800">
                          Faculty
                        </Link>
                      </li>
                      <li>
                        <Link to="/phd-scholars" className="block px-4 py-2 hover:bg-blue-800">
                          Ph.D Scholars
                        </Link>
                      </li>
                      <li>
                        <Link to="/btech-students" className="block px-4 py-2 hover:bg-blue-800">
                          B.Tech Students
                        </Link>
                      </li>
                      <li>
                        <Link to="/mtech-students" className="block px-4 py-2 hover:bg-blue-800">
                          M.Tech Students
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              }
              if (item === "Publications") {
                return (
                  <li key={item} className="relative group">
                    <button
                      className="block px-2 py-1 text-sky-100 focus:outline-none"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="inline-flex items-center">
                        {item}
                        <svg
                          className="w-3 h-3 ml-1 text-sky-100"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>
                    <ul className="absolute left-0 mt-2 w-48 bg-blue-950 text-white rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transform scale-95 group-hover:scale-100 group-focus-within:scale-100 transition-all pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto">
                      <li>
                        <Link to="/journals" className="block px-4 py-2 hover:bg-blue-800">
                          Journals
                        </Link>
                      </li>
                      <li>
                        <Link to="/conferences" className="block px-4 py-2 hover:bg-blue-800">
                          Conferences
                        </Link>
                      </li>
                      <li>
                        <Link to="/books" className="block px-4 py-2 hover:bg-blue-800">
                          Books/Chapters
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              }
              if (item === "Patents") {
                return (
                  <li key={item} className="hover:underline cursor-pointer">
                    <Link to="/patents" className="block px-2 py-1 text-sky-100">{item}</Link>
                  </li>
                );
              }
              if (item === "TOT") {
                return (
                  <li key={item} className="hover:underline cursor-pointer">
                    <Link to="/tot" className="block px-2 py-1 text-sky-100">{item}</Link>
                  </li>
                );
              }
              if (item === "Contact Us") {
                return (
                  <li key={item} className="hover:underline cursor-pointer">
                    <Link to="/contact" className="block px-2 py-1 text-sky-100">{item}</Link>
                  </li>
                );
              }
              return (
                <li key={item} className="hover:underline cursor-pointer">
                  <a href={`#${id}`} className="block px-2 py-1 text-sky-100">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
