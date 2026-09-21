import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">
              Hair Radiance
            </h3>

            <p className="mt-1 text-xs font-medium tracking-[0.25em] text-pink-400">
              BY KUHLE
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
              Professional hair, beauty and styling services designed
              to help you look and feel your best.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
              <Link to="/about" className="hover:text-pink-400">
                About Us
              </Link>

              <Link to="/services" className="hover:text-pink-400">
                Services
              </Link>

              <Link to="/booking" className="hover:text-pink-400">
                Book Appointment
              </Link>

              <Link to="/shop" className="hover:text-pink-400">
                Shop
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>

            <div className="mt-4 space-y-4 text-sm text-gray-400">
              <p className="flex gap-3">
                <MapPin size={18} className="text-pink-400" />
                <span>South Africa</span>
              </p>

              <p className="flex gap-3">
                <Phone size={18} className="text-pink-400" />
                <span>Contact us</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Follow Us</h4>

            <div className="mt-4 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 hover:bg-pink-600"
              >
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 hover:bg-pink-600"
              >
                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hair Radiance by Kuhle. All rights reserved.
        </div>
      </div>
    </footer>
  );
}