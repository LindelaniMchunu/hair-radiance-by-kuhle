import { Check, Eye, EyeOff, LockKeyhole } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTittle";
import Input from "../../../components/forms/Input";
import {AuthLayout} from "../../../layouts/AuthLayout";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [success, setSuccess] = useState(false);

  const passwordLengthValid = password.length >= 8;
  const passwordHasNumber = /\d/.test(password);

  const passwordsMatch =
    password.length > 0 &&
    password === confirmPassword;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      return;
    }

    if (!passwordLengthValid || !passwordHasNumber || !passwordsMatch) {
      return;
    }

    console.log({
      token,
      password,
    });

    setSuccess(true);

    // Backend password reset will be connected later.
  };

  if (success) {
    return (
      <AuthLayout>
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
            <Check className="text-green-600" size={36} />
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
            Password Updated
          </p>

          <h1 className="text-3xl font-bold text-gray-900">
            You're all set
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            Your password has been successfully updated. You can now sign in
            using your new password.
          </p>

          <div className="mt-8">
            <Link to="/login">
              <Button className="w-full">Continue to Sign In</Button>
            </Link>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout>
      <div className="mb-8 text-center lg:hidden">
        <Link to="/">
          <div className="text-2xl font-bold text-gray-950">
            Hair Radiance
          </div>

          <div className="mt-1 text-xs font-bold tracking-[0.35em] text-pink-600">
            BY KUHLE
          </div>
        </Link>
      </div>

      <div className="mb-8">
        <SectionTitle
          eyebrow="Reset Password"
          title="Create a new password"
          description="Choose a strong password that you don't use anywhere else."
        />
      </div>

      {!token && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          This password reset link is missing or invalid.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="New password"
            placeholder="Create a new password"
            autoComplete="new-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <LockKeyhole
            size={18}
            className="pointer-events-none absolute right-12 top-[38px] text-gray-400"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[34px] rounded-md p-1 text-gray-400 hover:text-pink-600"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        {password && (
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="mb-3 text-xs font-semibold text-gray-700">
              Password requirements
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Check
                  size={14}
                  className={
                    passwordLengthValid
                      ? "text-green-600"
                      : "text-gray-300"
                  }
                />

                <span
                  className={
                    passwordLengthValid
                      ? "text-green-700"
                      : "text-gray-500"
                  }
                >
                  At least 8 characters
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={14}
                  className={
                    passwordHasNumber
                      ? "text-green-600"
                      : "text-gray-300"
                  }
                />

                <span
                  className={
                    passwordHasNumber
                      ? "text-green-700"
                      : "text-gray-500"
                  }
                >
                  Contains at least one number
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="relative">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm new password"
            placeholder="Re-enter your new password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            error={
              confirmPassword && !passwordsMatch
                ? "Passwords do not match."
                : undefined
            }
            required
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-[34px] rounded-md p-1 text-gray-400 hover:text-pink-600"
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
          >
            {showConfirmPassword ? (
              <EyeOff size={17} />
            ) : (
              <Eye size={17} />
            )}
          </button>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={!token || !passwordsMatch}
        >
          Reset Password
        </Button>
      </form>

      <div className="mt-8 text-center">
        <Link
          to="/login"
          className="text-sm font-semibold text-pink-600 hover:text-pink-700"
        >
          ← Back to Sign In
        </Link>
      </div>
    </AuthLayout>
  );
}