"use client";
import React, { useState, useEffect } from "react";
import { EyeFill, EyeSlash } from "@styled-icons/bootstrap";
import Link from "next/link";
import { useFormik } from "formik"; 
import { useRouter } from "next/navigation";
import { validationLoginSchema } from "@/schema/schema";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const router = useRouter();

  // Toggle password visibility
  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  // Check authentication status on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem("isauth");
    const storedUsername = localStorage.getItem("username");
    if (authStatus === "true" && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      const storedUsername = localStorage.getItem("username");
      if (!storedUsername) {
        throw new Error("User is not authenticated.");
      }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: storedUsername }), 
      });
  
      if (!response.ok) {
        throw new Error("Logout failed. Please try again.");
      }
  
      // Clear authentication data from localStorage
      localStorage.removeItem("isauth");
      localStorage.removeItem("username");
  
      router.push("/"); 
      setIsAuthenticated(false);
      setUsername("");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  

  // Formik setup
  const formik = useFormik({
    initialValues: {
      username: "",  
      password: "",
    },
    validationSchema: validationLoginSchema, 
    onSubmit: async (values) => {
      setIsSubmitting(true); 
      setErrorMessage(""); 
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Invalid email or password. Please try again.");
        }

        const result = await response.json();
        console.log("Login successful:", result);

        if(result.token){
          localStorage.setItem("isauth", "true");
          localStorage.setItem("username", values.username); 
          setIsAuthenticated(true);
          setUsername(values.email);
        }

        router.push("/"); 
      } catch (error) {
        setErrorMessage(error.message || "An error occurred during login.");
        console.error("Error during login:", error);
      } finally {
        setIsSubmitting(false); 
      }
    },
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto mt-10">
      {isAuthenticated ? (
        <>
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Welcome, {username}!</h3>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded-md"
            >
              Log Out
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold mb-4 border-b pb-2 text-[#428690]">Login</h3>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="w-full border rounded-md p-2 text-sm"
              // autoComplete="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-500 text-xs">{formik.errors.username}</div>
            )}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border rounded-md p-2 text-sm"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div
                onClick={handleVisible}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                {isVisible ? (
                  <EyeFill height={18} width={18} />
                ) : (
                  <EyeSlash height={18} width={18} />
                )}
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
              )}
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm text-center">{errorMessage}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1c3a40] hover:bg-[#428690] text-white py-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>

            {/* Remember Me and Register Link */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <Link href="/auth/signup" className="text-red-500 underline">
                Register
              </Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
