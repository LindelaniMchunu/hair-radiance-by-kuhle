import {
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTittle";
import Input from "../../../components/forms/Input";
import {AuthLayout} from "../../../layouts/AuthLayout";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      ...formData,
      agreeToTerms,
    });

    // Backend registration will be connected later.
  };

  const passwordLengthValid = formData.password.length >= 8;
  const passwordHasNumber = /\d/.test(formData.password);
  const passwordsMatch =
    formData.password.length > 0 &&
    formData.password === formData.confirmPassword;

  return (
    <AuthLayout>
      <div className="mb-8">
        <div className="mb-6 text-center lg:hidden">
          <Link to="/">
            <div className="text-2xl font-bold text-gray-950">
              Hair Radiance
            </div>

            <div className="mt-1 text-xs font-bold tracking-[0.35em] text-pink-600">
              BY KUHLE
            </div>
          </Link>
        </div>

        <SectionTitle
          eyebrow="Create Account"
          title="Start your beauty journey"
          description="Create your Hair Radiance account to manage appointments, orders and your personal details."
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="relative">
            <Input
              id="firstName"
              name="firstName"
              type="text"
              label="First name"
              placeholder="Your first name"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={(event) =>
                handleChange("firstName", event.target.value)
              }
              required
            />

            <User
              size={18}
              className="pointer-events-none absolute right-4 top-[38px] text-gray-400"
            />
          </div>

          <div>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              placeholder="Your last name"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={(event) =>
                handleChange("lastName", event.target.value)
              }
              required
            />
          </div>
        </div>

        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="you@example.com"
            autoComplete="email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            required
          />

          <Mail
            size={18}
            className="pointer-events-none absolute right-4 top-[38px] text-gray-400"
          />
        </div>

        <div className="relative">
          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone number"
            placeholder="e.g. 082 123 4567"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            required
          />

          <Phone
            size={18}
            className="pointer-events-none absolute right-4 top-[38px] text-gray-400"
          />
        </div>

        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="Create a secure password"
            autoComplete="new-password"
            value={formData.password}
            onChange={(event) => handleChange("password", event.target.value)}
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

        {formData.password && (
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
                    passwordHasNumber ? "text-green-600" : "text-gray-300"
                  }
                />

                <span
                  className={
                    passwordHasNumber ? "text-green-700" : "text-gray-500"
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
            label="Confirm password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={(event) =>
              handleChange("confirmPassword", event.target.value)
            }
            error={
              formData.confirmPassword && !passwordsMatch
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

        <label className="flex items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(event) => setAgreeToTerms(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 accent-pink-600"
            required
          />

          <span>
            I agree to the{" "}
            <Link
              to="/terms"
              className="font-semibold text-pink-600 hover:text-pink-700"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="font-semibold text-pink-600 hover:text-pink-700"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>

      <div className="mt-8 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-pink-600 hover:text-pink-700"
        >
          Sign in
        </Link>
      </div>

      <div className="mt-6 text-center">
        <Link to="/" className="text-sm text-gray-500 hover:text-pink-600">
          ← Back to Hair Radiance
        </Link>
      </div>
    </AuthLayout>
  );
}