import { navbarLinks } from "../../../../data/navbarData";

function PublicMenu() {
  return (
    <nav className="flex flex-col md:flex-row gap-4 p-4">
      {navbarLinks.map((nav) => (
        <a
          key={nav.id}
          href={nav.link}
          className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
        >
          {nav.name}
        </a>
      ))}
    </nav>
  );
}

export default PublicMenu;
