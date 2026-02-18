import { Outlet } from "react-router-dom";
import Navbar from "../../user/Navbar";
import MobileNav from "../../user/mobile/MobileNav";
import MobileMenu from "../../user/mobile/MobileMenu";
import type { JSX } from "react";
import { useState } from "react";

function MainLayout(): JSX.Element {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <section className="w-screen">
      <Navbar />
      <MobileNav setMobileMenu={setMobileMenu} />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      <div className="p-2 md:px-8 lg:px-12 py-2 md:py-7 ">
        <Outlet />
      </div>
    </section>
  );
}

export default MainLayout;
