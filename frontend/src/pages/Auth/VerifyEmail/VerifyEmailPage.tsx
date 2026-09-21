import { CheckCircle2, Mail, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../../components/common/Button";
import {AuthLayout} from "../../../layouts/AuthLayout";

export default function VerifyEmailPage() {
  const handleResend = () => {
    console.log("Resend verification email");
    // Backend email resend will be connected later.
  };

  return (
    <AuthLayout>
      <div className="mb-8 text-center">
        <div className="mb-6 lg:hidden">
          <Link to="/">
            <div className="text-2xl font-bold text-gray-950">
              Hair Radiance
            </div>

            <div className="mt-1 text-xs font-bold tracking-[0.35em] text-pink-600">
              BY KUHLE
            </div>
          </Link>
        </div>

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-50">
          <Mail className="text-pink-600" size={34} />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
          Verify Your Email
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Check your inbox
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600">
          We've sent a verification link to your email address. Please click
          the link to activate your Hair Radiance account.
        </p>
      </div>

      <div className="rounded-2xl border border-pink-100 bg-pink-50/50 p-5">
        <div className="flex gap-3">
          <CheckCircle2
            size={20}
            className="mt-0.5 shrink-0 text-pink-600"
          />

          <div>
            <p className="text-sm font-semibold text-gray-900">
              One more step
            </p>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              Check your spam or junk folder if you don't see the email in
              your inbox.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleResend}
        >
          <RefreshCw size={17} />
          Resend Verification Email
        </Button>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/login"
          className="text-sm font-semibold text-pink-600 hover:text-pink-700"
        >
          ← Return to Sign In
        </Link>
      </div>
    </AuthLayout>
  );
}