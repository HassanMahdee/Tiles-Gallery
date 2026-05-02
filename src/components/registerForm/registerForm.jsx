"use client";
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
export default function RegisterForm() {
  return (
    <div className="flex flex-col gap-4 min-h-[80vh] items-center justify-center">
      <Form className="flex w-96 flex-col gap-4">
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" isRequired className="w-full" />
          <Label>Email</Label>
          <Input placeholder="john@example.com" className="w-full" isRequired />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
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
          <Input
            placeholder="Enter your password"
            className="w-full"
            isRequired
          />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <Label>Profile Picture URL</Label>
        <Input
          placeholder="https://example.com/profile.jpg"
          className="w-full"
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
