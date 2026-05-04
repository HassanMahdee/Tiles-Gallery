import Link from "next/link";
export function generateMetadata() {
  return {
    title: "Login | Tiles Gallery",
    description: "Login to your account",
  };
}
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <fieldset className="fieldset w-96 max-h-fit p-4 mx-auto">
        <label className="label">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Email"
          isRequired
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
          isRequired
        />

        <button className="btn btn-primary mt-4 rounded-full">Login</button>
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
