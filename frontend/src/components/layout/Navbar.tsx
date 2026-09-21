import {
  Menu,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gray-950 px-4 py-2 text-center text-xs font-medium tracking-wide text-white">
        Beauty • Hair • Confidence — Welcome to Hair Radiance by Kuhle
      </div>

      <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="group flex flex-col">
            <span className="text-xl font-bold tracking-tight text-gray-950 transition group-hover:text-pink-600">
              Hair Radiance
            </span>

            <span className="text-[10px] font-bold tracking-[0.35em] text-pink-600">
              BY KUHLE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition ${
                    isActive
                      ? "text-pink-600"
                      : "text-gray-700 hover:text-pink-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">

            <Link
              to="/shop"
              className="rounded-full p-2.5 text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
              aria-label="Shop"
            >
              <ShoppingBag size={20} />
            </Link>

            <Link
              to="/login"
              className="rounded-full p-2.5 text-gray-700 transition hover:bg-pink-50 hover:text-pink-600"
              aria-label="Account"
            >
              <UserRound size={20} />
            </Link>

            <Link
              to="/booking"
              className="ml-2 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-pink-700 hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            className="rounded-lg p-2 text-gray-700 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-pink-100 bg-white px-5 py-6 lg:hidden">
            <nav className="flex flex-col gap-5">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-pink-600"
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <UserRound size={18} />
                My Account
              </Link>

              <Link
                to="/booking"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-pink-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book Appointment
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}