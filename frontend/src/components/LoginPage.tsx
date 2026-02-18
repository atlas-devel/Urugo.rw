import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "./login-form";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section>
      <div className="hidden sm:block p-4 px-10 absolute top-0 left-0">
        <Link to="/">
          <h1 className="text-blue-700 font-semibold text-2xl  ">Urugo.rw</h1>
        </Link>
      </div>
      <div className="bg-white flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
