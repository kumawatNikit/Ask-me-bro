"use client";
import React, { useState } from "react";
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";
import Link from "next/link";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2 border-b pb-2 text-[#428690]">
        Login
      </h3>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-md p-2 text-sm"
          autoComplete="username"
        />
        <input
          type={isVisible ? "text" : "password"}
          placeholder="Password"
          className="w-full border rounded-md p-2 text-sm"
          autoComplete="current-password"
        />
        {isVisible ? (
          <EyeFill onClick={handleVisible} height={15} width={15} />
        ) : (
          <EyeSlash onClick={handleVisible} height={15} width={15} />
        )}
        <button className="w-full bg-[#1c3a40] hover:bg-[#428690] text-white py-2 rounded-md">
          Log In
        </button>
        <div className="flex items-center text-sm justify-between">
          <div>
            <input type="checkbox" className="mr-2" />
            <label>Remember Me</label>
          </div>
          <Link href="auth/signup" className="text-red-500 text-sm underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
