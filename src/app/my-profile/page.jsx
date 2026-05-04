import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";

export default async function MyProfile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div className="min-h-[80vh] container mx-auto flex flex-col gap-8 pb-8 items-center">
      <h1 className="text-4xl font-bold text-center mt-10 text-(--color-text)">
        My Profile
      </h1>
      {user ? (
        <div className="flex flex-col items-center justify-center border border-gray-300 flex-1 w-[40%] p-8 gap-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full border-2 border-gray-300 overflow-hidden">
              <Image
                src={user.image || "/default-avatar.png"}
                alt={user.name}
                width={100}
                height={100}
                className="m-2"
              />
            </div>
            <div className="flex flex-col gap-2 border-l border-gray-300 pl-8">
              <p className="font-bold">Name:</p>
              <p className="text-gray-600">{user.name}</p>
              <p className="font-bold">Email:</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <Link
            href="/my-profile/update-profile"
            className="btn btn-primary text-(--color-bg) rounded-full hover:bg-primary/80 transition-colors"
          >
            Update
          </Link>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <p className="text-error text-3xl capitalize text-center">
            error fetching user data
          </p>
          <Link href="/" className="text-secondary hover:underline mt-4">
            Go back to home
          </Link>
        </div>
      )}
    </div>
  );
}
