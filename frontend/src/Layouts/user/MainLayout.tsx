import { Outlet } from "react-router-dom";
import Navbar from "../../components/user/Navbar";
import MobileNav from "../../components/user/mobile/MobileNav";
import MobileMenu from "../../components/user/mobile/MobileMenu";
import type { JSX } from "react";
import { useState } from "react";
import Hero from "../../components/user/Home/Hero";

function MainLayout(): JSX.Element {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <section className="w-full">
      <Navbar />
      <MobileNav setMobileMenu={setMobileMenu} />
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      <Hero />
      <div className="p-2 md:px-12 lg:px-20">
        <Outlet />
      </div>
    </section>
  );
}

export default MainLayout;
