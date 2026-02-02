import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-neutral-900">
      <div
        data-slot="card"
        className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-xl"
      >
        <div data-slot="header" className="space-y-1">
          <h3 className="text-2xl font-semibold text-center tracking-tight">
            Welcome
          </h3>
          <p className="text-gray-600 text-sm text-center">
            Sign in your account
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <LabelInputContainer>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              className="h-10 rounded-md border border-neutral-300 px-3 text-sm
              outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            />
            <p className="text-xs text-red-500">Email can't be empty.</p>
          </LabelInputContainer>

          <LabelInputContainer>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="h-10 rounded-md border border-neutral-300 px-3 text-sm
              outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
            />
            <p className="text-xs text-red-500">Password can't be empty.</p>
          </LabelInputContainer>

          <button className="mt-6 h-10 bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-neutral-900">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <span className="underline text-blue-600">Register</span>
        </p>
      </div>
    </div>
  );
};

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-2 flex flex-col">{children}</div>;
};

export default LoginPage;
