import { Link } from "react-router-dom";
import useSidebar from "../../../../hooks/useSidebar";
import { Home } from "lucide-react";
function AppLogo({ variants }: { variants: string }) {
  const { isOpen } = useSidebar();
  if (!isOpen) return;
  return (
    <Link to="/" className={`${variants} flex items-center gap-2`}>
      <div className="bg-linear-to-l from-blue-500 to-blue-700 text-gray-100 p-2 rounded-lg">
        <Home size={20} />
      </div>
      <div className="text-xs">
        <span className="text-secondary-color text-sm uppercase font-semibold ">
          Urugo
        </span>
        <p className="text-gray-600 font-medium uppercase">Dashboard</p>
      </div>
    </Link>
  );
}

export default AppLogo;
