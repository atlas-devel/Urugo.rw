import DesktopLogin from "../../components/public/auth/DesktopLogin";
import MobileLogin from "../../components/public/auth/MobileLogin";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <MobileLogin />
      <DesktopLogin />
    </div>
  );
}

export default LoginPage;
