import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            Hair Radiance
          </span>

          <span className="text-xs font-medium tracking-[0.25em] text-pink-600">
            BY KUHLE
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/cart"
            className="rounded-full p-2 text-gray-700 hover:bg-pink-50 hover:text-pink-600"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
          </Link>

          <Link
            to="/booking"
            className="rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Book Appointment
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-gray-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-pink-100 bg-white px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
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
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-pink-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}