"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label } from "@heroui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdateProfileForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const handleUpdate = async (data) => {
    const { name, profilePicture } = data;
    const { data: userData, error } = await authClient.updateUser({
      name,
      image: profilePicture,
      callbackURL: "/my-profile",
    });
    if (error) {
      toast.error(error.message);
    }
    if (userData) {
      toast.success("User updated successfully");
      router.push("/my-profile");
      router.refresh();
    }
  };
  return (
    <Form
      className="flex w-96 flex-col gap-4"
      onSubmit={handleSubmit(handleUpdate)}
    >
      <Label>Name</Label>
      <Input
        placeholder="Enter your name"
        className="w-full"
        {...register("name")}
      />
      <Label>Profile Picture URL</Label>
      <Input
        placeholder="Enter profile picture URL"
        className="w-full"
        {...register("profilePicture")}
      />
      <div className="flex gap-2">
        <Button type="submit" className="w-full bg-(--color-primary)">
          Update
        </Button>
      </div>
    </Form>
  );
}
