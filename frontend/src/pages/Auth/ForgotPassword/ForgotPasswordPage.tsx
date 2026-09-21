import { ArrowLeft, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTittle";
import Input from "../../../components/forms/Input";
import {AuthLayout} from "../../../layouts/AuthLayout";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      email,
    });

    setSubmitted(true);

    // Password reset email will be connected to the backend later.
  };

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

      {!submitted ? (
        <>
          <div className="mb-8">
            <SectionTitle
              eyebrow="Password Recovery"
              title="Forgot your password?"
              description="Enter your email address and we'll send you instructions to reset your password."
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                label="Email address"
                placeholder="you@example.com"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <Mail
                size={18}
                className="pointer-events-none absolute right-4 top-[38px] text-gray-400"
              />
            </div>

            <Button type="submit" className="w-full">
              Send Reset Link
            </Button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-pink-50">
            <Mail className="text-pink-600" size={34} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Check your email
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            If an account exists for{" "}
            <span className="font-semibold text-gray-900">{email}</span>, we
            have sent instructions to reset your password.
          </p>

          <p className="mt-3 text-xs leading-5 text-gray-500">
            Check your spam or junk folder if the message doesn't appear in
            your inbox.
          </p>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 hover:text-pink-700"
        >
          <ArrowLeft size={16} />
          Back to Sign In
        </Link>
      </div>
    </AuthLayout>
  );
}