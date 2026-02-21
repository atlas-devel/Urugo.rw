import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const navigations = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
  {
    name: "Faq",
    link: "#",
  },
];

function Navbar() {
  return (
    <nav className="hidden  md:flex items-center justify-between  p-2 md:px-12 lg:px-20  py-2 md:py-7 bg-white border-b rounded-b-2xl shadow-sm">
      <Link to="/">
        <h1 className="text-blue-600 font-semibold text-2xl uppercase">
          Urugo.rw
        </h1>
      </Link>
      <ul className="text-black font-medium flex gap-8">
        {navigations.map(
          (nav: { name: string; link: string }, index: number) => (
            <Link
              className="hover:border-blue-600 hover:border-b-2 duration-300 hover:text-blue-600 p-1 px-3  active:text-blue-600  focus:text-blue-600"
              key={index + 1}
              to={nav.link}
            >
              {nav.name}
            </Link>
          ),
        )}
      </ul>
      <div className="flex gap-3">
        <Button variant="outline" className="cursor-pointer text-blue-600">
          Get Started
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-600/95 cursor-pointer">
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
