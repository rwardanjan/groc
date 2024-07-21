import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

const API_URL = "https://groc-json.vercel.app";

const Login = ({ setAuthToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      setAuthToken(response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="grid max-h-screen gap-7 grid-cols-1 lg:grid-cols-2">
      {/* Left Side: Image */}
      <div className="p-6 flex items-center justify-center bg-gray-100">
        <img
          alt="Hero Image"
          src="../../src/assets/cooking.svg"
          className="w-64 h-auto object-contain" // Adjust the size here
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="flex flex-col items-center justify-center gap-6 p-4 pt-0 md:p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Welcome to{" "}
            <span className="text-purple-500 font-black">Reciply</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-xl">
            Get started by logging in or creating a new account.
          </p>
        </div>
        <Card className="w-full max-w-md">
          <CardContent className="space-y-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Log in
              </Button>
            </form>
            <div className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                Register
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
