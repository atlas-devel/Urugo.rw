import { X } from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProp {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

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

function MobileMenu({ setMobileMenu }: MobileMenuProp): JSX.Element {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="md:hidden absolute top-0 right-0  bg-white text-blue-700  shadow-md min-w-[150px] max-w-[200px]"
      >
        <div className="flex justify-end p-2 ">
          <X
            className="cursor-pointer"
            onClick={() => setMobileMenu((prev) => !prev)}
          />
        </div>
        <ul className="flex flex-col font-normal ">
          {navigations.map(
            (nav: { name: string; link: string }, index: number) => (
              <Link
                className="px-3 py-2 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200"
                key={index + 1}
                to={nav.link}
              >
                {nav.name}
              </Link>
            ),
          )}
          <Link
            className="px-3 py-2 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200"
            to="/register"
          >
            Get Started
          </Link>
          <Link
            className="px-3 bg-blue-700 text-white font-semibold py-2 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200"
            to="/login"
          >
            Login
          </Link>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default MobileMenu;
