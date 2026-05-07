import { navbarLinks } from "../../../../data/navbarData";

function PublicMenu() {
  return (
    <nav className="fixed top-13 right-0 bg-white  shadow-sm z-50 flex flex-col md:flex-row items-center justify-end px-8 py-4 rounded-bl-lg">
      <ul className="flex flex-col md:flex-row gap-8">
        {navbarLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={nav.link}
              className="text-gray-600 hover:text-blue-600 font-medium tracking-wide transition-all duration-200 ease-in-out relative group"
            >
              {nav.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PublicMenu;
