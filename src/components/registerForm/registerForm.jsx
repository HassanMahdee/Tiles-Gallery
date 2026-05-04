"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (data) => {
    const { name, email, password, profilePicture } = data;
    const { data: userData, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: profilePicture,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    }
    if (userData) {
      toast.success("User registered successfully");
    }
  };
  return (
    <div className="flex flex-col gap-4 min-h-[80vh] items-center justify-center">
      <h2 className="text-2xl font-bold">Register</h2>
      <Form
        className="flex w-96 flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <Label>Name</Label>
        <Input
          placeholder="John Doe"
          className="w-full"
          {...register("name")}
        />
        <TextField
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            placeholder="john@example.com"
            className="w-full"
            {...register("email")}
          />
          <FieldError />
        </TextField>
        <TextField
          minLength={8}
          type={showPassword ? "text" : "password"}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <div className="relative">
            <Input
              placeholder="Enter your password"
              className="w-full"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              {showPassword ? <LuEyeClosed /> : <LuEye />}
            </button>
          </div>
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <Label>Profile Picture URL</Label>
        <Input
          isRequired
          placeholder="https://example.com/profile.jpg"
          className="w-full"
          {...register("profilePicture")}
        />
        <div className="flex gap-2">
          <Button type="submit" className="w-full bg-(--color-primary)">
            Submit
          </Button>
          <Button type="reset" className="w-full bg-(--color-secondary)">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center text-(--color-text-muted)">
        Already have an account?{" "}
        <Link href="/login" className="text-(--color-primary)">
          Login
        </Link>
      </p>
    </div>
  );
}
