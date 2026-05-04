"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: userData, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };
  const handleGoogleLogin = async () => {
    const { data: googleData, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <fieldset className="fieldset w-96 max-h-fit p-4 mx-auto">
        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-error">Email is required</p>}
        <label className="label">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="input w-full"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-error">Password is required</p>
          )}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <LuEye /> : <LuEyeClosed />}
          </button>
        </div>
        <div className="flex w-full gap-2">
          <button
            className="btn btn-primary mt-4 rounded-full flex-1"
            onClick={handleSubmit(handleLogin)}
          >
            Login
          </button>
          <button
            className="btn btn-outline border-secondary text-secondary mt-4 rounded-full"
            onClick={handleGoogleLogin}
          >
            <FaGoogle /> Login with Google
          </button>
        </div>
      </fieldset>
      <p className="mt-4">
        New here?{" "}
        <Link className="text-primary" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
