import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type LoginInputState = {
  email:string,
  password:string
}

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const changeEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setInput({...input, [name]:value});
  };

  const loginSubmitHandler = (e:FormEvent) => {
    e.preventDefault();
    console.log(input);
  };
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          KhubKhawo
        </h2>
        <form className="space-y-4" onSubmit={loginSubmitHandler}>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Email"
              value={input.email}
              onChange={changeEventHandler}
              className="block w-full pl-8 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <Mail className="absolute text-gray-500 top-1.5 ml-1 p-0.5" />
          </div>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Password"
              value={input.password}
              onChange={changeEventHandler}
              className="block w-full pl-8 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <LockKeyhole className="absolute text-gray-500 top-1.5 ml-1 p-0.5" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          {loading ? (
            <Button className="w-full" disabled>
              {" "}
              <Loader2 className="animate-spin" /> Please wait{" "}
            </Button>
          ) : (
            <Button className="w-full bg-aureolin hover:bg-hoverAureolin">
              Login
            </Button>
          )}
        </form>
        <Separator />
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
