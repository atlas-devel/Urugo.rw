import { Link } from "react-router-dom";

const navbarLinks = [
  { id: 1, name: "Features", link: "#features" },
  { id: 2, name: "Properties", link: "#properties" },
  { id: 3, name: "How It Works", link: "#how-it-works" },
  { id: 4, name: "Pricing", link: "#pricing" },
];

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-1 pb-4 ">
      <Link
        to="/"
        className="flex items-center uppercase font-bold text-2xl text-blue-700"
      >
        <span>Urugo</span>
        <span className="translate-y-1.5 text-xs  lowercase">rw</span>
      </Link>
      <ul className="hidden md:flex items-center md:gap-6  shadow-sm px-2 lg:px-4 py-1.5 rounded-full bg-white border border-gray-100 text-gray-700">
        {navbarLinks.map((link) => (
          <li
            key={link.id}
            className="lg:px-3 py-1 text-nowrap  hover:bg-blue-700 rounded-full hover:text-white"
          >
            <a
              className="transition-colors duration-300 cursor-pointer text-sm font-semibold"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li className="hidden xl:block lg:px-3 py-1 text-nowrap  hover:bg-blue-700 rounded-full hover:text-white">
          <a
            className="transition-colors duration-300 cursor-pointer text-sm font-semibold"
            href="#testimonials"
          >
            Testmonials
          </a>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <Link
          to="/login"
          className="text-nowrap bg-blue-700 z-1 overflow-hidden text-white relative group duration-300 transition-colors hover:text-blue-700 p-1.5 font-semibold lg:px-8 cursor-pointer rounded-md border-2 border-white hover:border-blue-700"
        >
          <span className="bg-white absolute inset-0 translate-y-12 group-hover:translate-0 -z-1 duration-300  " />
          Sign In
        </Link>
        <Link
          to="/register"
          className="text-nowrap z-1 overflow-hidden text-blue-700 relative group duration-300 transition-colors  hover:text-white p-1.5 font-semibold lg:px-6 cursor-pointer rounded-md border-2 border-blue-700 hover:border-white"
        >
          <span className="bg-blue-700 absolute inset-0 translate-y-12 group-hover:translate-0  -z-1 duration-300  " />
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
