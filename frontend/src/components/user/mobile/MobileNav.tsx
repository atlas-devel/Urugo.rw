import { Menu } from "lucide-react";
import type { Dispatch, JSX, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

function MobileNav({ setMobileMenu }: MobileMenuProps): JSX.Element {
  return (
    <div className="md:hidden flex justify-between items-center p-2 px-4 sm:p-4">
      <Link to="/">
        <h1 className="text-blue-700 font-semibold text-2xl uppercase">
          Urugo.rw
        </h1>
      </Link>
      <div className="text-blue-700 ">
        <Menu onClick={() => setMobileMenu((prev) => !prev)} size="28px" />
      </div>
    </div>
  );
}

export default MobileNav;
