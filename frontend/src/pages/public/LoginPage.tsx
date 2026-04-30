import DesktopLogin from "../../components/public/DesktopLogin";
import MobileLogin from "../../components/public/MobileLogin";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <MobileLogin />
      <DesktopLogin />
    </div>
  );
}

export default LoginPage;
