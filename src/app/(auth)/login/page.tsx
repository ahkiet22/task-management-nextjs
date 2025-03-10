"use client";

import { fetchData } from "@/utils/fetch";
import React, { useEffect, useState } from "react";
import { EMAIL_REG, PASSWORD_REG } from "@/configs/regex";
import { TUserLogin } from "@/types/auth.type";
import Link from "next/link";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";

interface TUserLoginResponse {
  data: string;
}

export default function Login() {
  const [data, setData] = useState<unknown | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("value") as string;
    const password = formData.get("password") as string;
    const dataForm: TUserLogin = {
      email,
      password,
    };
    // In ra giá trị
    const isEmailValid = EMAIL_REG.test(email);
    const isPasswordValid = PASSWORD_REG.test(password);
    if (isEmailValid && isPasswordValid) {
      try {
        const response = await fetchData<TUserLoginResponse>({
          url: "/api/v1/auth/login",
          method: "POST",
          data: dataForm,
        });
        setData(response.data.data);
        localStorage.setItem("token", data as string);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Data failed:", error.message);
          throw error;
        } else {
          console.error("unknown error");
        }
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.back();
    }
  }, [router]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-full h-screen flex items-center justify-center py-12">
      <div className="bg-white py-12 px-10 rounded-3xl shadow-xl w-full max-w-md">
        <form
          className="flex flex-col items-center gap-y-6"
          onSubmit={handleLogin}
        >
          <h1 className="text-4xl font-semibold text-center text-gray-800">
            WELCOME BACK
          </h1>
          <p className="text-gray-500 mb-4">
            Welcome back! Please enter your details.
          </p>
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              name="value"
              type="text"
              placeholder="example@gmail.com"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="6+ characters"
              className="w-full bg-gray-100 rounded-xl px-4 py-3 mt-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="text-right w-full mt-2 text-sm text-blue-600">
            <Link href="/forgot-password">Forgot your password?</Link>
          </div>
          <div className="w-full mt-6">
            <button
              type="submit"
              className="w-full h-12 bg-blue-600 text-white font-semibold rounded-xl transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105"
            >
              Login
            </button>
          </div>
          <div className="flex flex-col items-center justify-between gap-y-4 mt-6">
            <Link href="/register" className="text-blue-600 text-sm">
              Create new account
            </Link>
            <div className="text-md text-gray-400">OR</div>
            <ul className="flex items-center gap-x-6">
              <li className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-blue-500 transition duration-300">
                <FaGoogle className="text-gray-600 hover:text-white" />
              </li>
              <li className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-blue-600 transition duration-300">
                <FaFacebook className="text-gray-600 hover:text-white" />
              </li>
              <li className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-black transition duration-300">
                <FaGithub className="text-gray-600 hover:text-white" />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
