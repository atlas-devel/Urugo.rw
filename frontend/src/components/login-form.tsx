import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "./ui/field";
import { Input } from "./ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-white border-blue-700/20 shadow-lg">
        <CardHeader className="text-center bg-white">
          <CardTitle className="text-3xl mb-3 font-semibold text-blue-700">
            Welcome back
          </CardTitle>
          <CardDescription className="text-slate-600">
            Login with your Google account
          </CardDescription>
        </CardHeader>
        <CardContent className="bg-white">
          <form>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-colors flex items-center justify-center gap-2"
                >
                  <img src="/google.svg" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </Button>
              </Field>

              <FieldSeparator className="">
                <span className="text-slate-500 text-sm">Or continue with</span>
              </FieldSeparator>

              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-blue-700 font-medium"
                >
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-slate-300 focus:border-blue-700 focus:ring-blue-700"
                />
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel
                    htmlFor="password"
                    className="text-blue-700 font-medium"
                  >
                    Password
                  </FieldLabel>
                  <a
                    href="#"
                    className="text-sm text-blue-700 hover:text-blue-800 underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  minLength={8}
                  required
                  className="border-slate-300 focus:border-blue-700 focus:ring-blue-700"
                />
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium"
                >
                  Login
                </Button>
              </Field>

              <FieldDescription className="text-center text-slate-600">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
                >
                  Sign up
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
