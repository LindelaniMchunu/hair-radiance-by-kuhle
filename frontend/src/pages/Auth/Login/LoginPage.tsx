import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTittle";
import Input from "../../../components/forms/Input";
import {AuthLayout} from "../../../layouts/AuthLayout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log({
      email,
      password,
    });

    // Backend authentication will be connected later.
  };

  return (
    <AuthLayout>
      {/* Mobile Logo */}
      <div className="mb-10 text-center lg:hidden">
        <Link to="/">
          <div className="text-2xl font-bold text-gray-950">
            Hair Radiance
          </div>

          <div className="mt-1 text-xs font-bold tracking-[0.35em] text-pink-600">
            BY KUHLE
          </div>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <SectionTitle
          eyebrow="Welcome Back"
          title="Sign in to your account"
          description="Access your appointments, orders and Hair Radiance account."
        />
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Email */}
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

          <Mail
            size={18}
            className="pointer-events-none absolute right-4 top-[38px] text-gray-400"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />

          <LockKeyhole
            size={18}
            className="pointer-events-none absolute right-12 top-[38px] text-gray-400"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-[34px] rounded-md p-1 text-gray-400 hover:text-pink-600"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
          >
            {showPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 accent-pink-600"
            />

            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-pink-600 hover:text-pink-700"
          >
            Forgot password?
          </Link>

        </div>

        {/* Submit */}
        <Button
          type="submit"
          className="w-full"
        >
          Sign In
        </Button>

      </form>

      {/* Register */}
      <div className="mt-8 text-center text-sm text-gray-600">
        Don't have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-pink-600 hover:text-pink-700"
        >
          Create one
        </Link>
      </div>

      {/* Back Home */}
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="text-sm text-gray-500 hover:text-pink-600"
        >
          ← Back to Hair Radiance
        </Link>
      </div>

    </AuthLayout>
  );
}