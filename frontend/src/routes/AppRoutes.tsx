import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import ServicesPage from "../pages/Services/ServicesPage";
import BookingPage from "../pages/Booking/BookingPage";
import ShopPage from "../pages/Shop/ShopPage";
import ContactPage from "../pages/Contact/ContactPage";
import GalleryPage from "../pages/Gallery/GalleryPage";

import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import VerifyEmailPage from "../pages/Auth/VerifyEmail/VerifyEmailPage";
import ForgotPasswordPage from "../pages/Auth/ForgotPassword/ForgotPasswordPage";
import ResetPasswordPage from "../pages/Auth/ResetPassword/ResetPasswordPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />
        <Route
          path="/reset-password"
          element={<ResetPasswordPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}