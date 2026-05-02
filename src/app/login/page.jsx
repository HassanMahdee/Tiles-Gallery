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
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-96 max-h-fit border p-4 mx-auto">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />

        <label className="label">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
        />

        <button className="btn btn-primary mt-4">Login</button>
      </fieldset>
      <p className="mt-4">
        New here?{" "}
        <Link className="link" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
}
