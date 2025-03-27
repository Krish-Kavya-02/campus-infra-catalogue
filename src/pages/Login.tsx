
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 flex justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border">
        <div className="mb-6 flex items-center">
          <Link to="/" className="text-primary hover:underline flex items-center text-sm">
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-2xl font-display font-bold mb-6 text-center">Login</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
