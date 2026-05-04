import UpdateProfileForm from "@/components/updateProfileForm/updateProfileForm";

export default function UpdateProfile() {
  return (
    <div className="flex flex-col gap-4 min-h-[80vh] items-center justify-center">
      <h2 className="text-2xl font-bold">Update Profile</h2>
      <UpdateProfileForm />
    </div>
  );
}
