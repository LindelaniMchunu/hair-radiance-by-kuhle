import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "../../components/common/Badge";
import Button from "../../components/common/Button";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTittle";

export default function HomePage() {
  const services = [
    {
      name: "Hair Styling",
      description:
        "Beautiful styles created to complement your personality and occasion.",
      price: "From R250",
    },
    {
      name: "Braiding",
      description:
        "Professional braiding with attention to detail, comfort and style.",
      price: "From R350",
    },
    {
      name: "Hair Treatments",
      description:
        "Nourishing treatments designed to restore moisture, strength and shine.",
      price: "From R200",
    },
  ];

  const products = [
    {
      name: "Hydrating Hair Mask",
      price: "R249",
      category: "Hair Care",
    },
    {
      name: "Radiance Hair Oil",
      price: "R199",
      category: "Treatment",
    },
    {
      name: "Daily Moisture Cream",
      price: "R179",
      category: "Styling",
    },
  ];

  const testimonials = [
    {
      name: "Happy Client",
      text: "Beautiful service, beautiful results and such a welcoming experience.",
    },
    {
      name: "Happy Client",
      text: "The attention to detail was amazing. I absolutely loved my hair.",
    },
    {
      name: "Happy Client",
      text: "Professional, friendly and exactly what I wanted.",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <Container className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

          <div className="max-w-2xl">

            <Badge>
              Beauty • Hair • Confidence
            </Badge>

            <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Where your
              <span className="block text-pink-600">
                beauty shines.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
              Welcome to Hair Radiance by Kuhle — a beauty experience
              created to make you feel confident, beautiful and
              completely yourself.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/booking">
                <Button>
                  Book Appointment
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>

              <Link to="/services">
                <Button variant="outline">
                  View Services
                </Button>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check
                  size={17}
                  className="text-pink-600"
                />
                Professional service
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={17}
                  className="text-pink-600"
                />
                Quality products
              </div>

              <div className="flex items-center gap-2">
                <Check
                  size={17}
                  className="text-pink-600"
                />
                Easy booking
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-pink-200/60 blur-2xl" />

            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-full bg-rose-200/60 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-200 via-pink-100 to-white shadow-2xl">

              <div className="flex h-full flex-col items-center justify-center p-8 text-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
                  <Sparkles
                    size={42}
                    className="text-pink-600"
                  />
                </div>

                <p className="mt-8 text-3xl font-bold text-gray-900">
                  Hair Radiance
                </p>

                <p className="mt-2 text-xs font-bold tracking-[0.35em] text-pink-600">
                  BY KUHLE
                </p>

                <p className="mt-6 max-w-xs text-sm leading-6 text-gray-600">
                  Your style. Your confidence. Your radiance.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                  <Star size={20} fill="currentColor" />
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Premium Care
                  </p>
                  <p className="text-xs text-gray-500">
                    Every appointment matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TRUST STRIP
      ====================================================== */}

      <section className="border-b border-pink-100 bg-white">
        <Container className="grid gap-8 py-8 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3">
            <Sparkles className="text-pink-600" size={22} />
            <span className="text-sm font-semibold text-gray-800">
              Professional Hair Care
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Heart className="text-pink-600" size={22} />
            <span className="text-sm font-semibold text-gray-800">
              Personalised Service
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Star className="text-pink-600" size={22} />
            <span className="text-sm font-semibold text-gray-800">
              Quality You Can Trust
            </span>
          </div>

        </Container>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="py-24">
        <Container>

          <SectionTitle
            eyebrow="Our Services"
            title="Beauty services designed around you"
            description="Whether you're preparing for a special occasion or simply treating yourself, Hair Radiance by Kuhle is here to help."
            centered
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-600 group-hover:text-white">
                  <Sparkles size={25} />
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-sm font-semibold text-pink-600">
                    {service.price}
                  </span>

                  <Link
                    to="/services"
                    className="flex items-center text-sm font-semibold text-gray-800 hover:text-pink-600"
                  >
                    Learn more
                    <ArrowRight
                      size={16}
                      className="ml-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services">
              <Button variant="outline">
                View Full Price List
              </Button>
            </Link>
          </div>

        </Container>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="bg-gray-50 py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">

          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-200 to-white">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <Heart
                  size={55}
                  className="mx-auto text-pink-500"
                />

                <p className="mt-5 text-2xl font-bold text-gray-800">
                  Beauty with Purpose
                </p>
              </div>
            </div>
          </div>

          <div>
            <Badge>About Hair Radiance</Badge>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              More than a salon.
              <span className="block text-pink-600">
                It's your radiance.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Hair Radiance by Kuhle is built around one simple idea:
              every client deserves to leave feeling confident,
              beautiful and cared for.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From professional hair services to carefully selected
              hair products, we're creating an experience that puts
              quality and you first.
            </p>

            <div className="mt-8">
              <Link to="/about">
                <Button variant="secondary">
                  Our Story
                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />
                </Button>
              </Link>
            </div>
          </div>

        </Container>
      </section>

      {/* =====================================================
          BOOKING CTA
      ====================================================== */}

      <section className="bg-gray-950 py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2">

          <div>
            <Badge>Easy Booking</Badge>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
              Make time for yourself.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Choose your service, select a convenient date and time,
              and we'll take care of the rest.
            </p>

            <div className="mt-8">
              <Link to="/booking">
                <button className="inline-flex items-center rounded-full bg-pink-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-pink-700">
                  Book Now
                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CalendarDays
                className="text-pink-400"
                size={28}
              />

              <h3 className="mt-5 font-semibold text-white">
                Choose your date
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Find a time that works for your schedule.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Clock3
                className="text-pink-400"
                size={28}
              />

              <h3 className="mt-5 font-semibold text-white">
                Select your time
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                See available appointment slots.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section className="py-24">
        <Container>

          <SectionTitle
            eyebrow="Shop"
            title="Take your radiance home"
            description="Discover products selected to help you maintain beautiful, healthy-looking hair between appointments."
            centered
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {products.map((product) => (
              <div
                key={product.name}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-pink-100 to-rose-50">
                  <Sparkles
                    size={48}
                    className="text-pink-400"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pink-600">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-bold text-gray-900">
                      {product.price}
                    </span>

                    <Link
                      to="/shop"
                      className="text-sm font-semibold text-pink-600 hover:text-pink-700"
                    >
                      Shop now
                    </Link>
                  </div>
                </div>

              </div>
            ))}

          </div>

          <div className="mt-10 text-center">
            <Link to="/shop">
              <Button variant="outline">
                Visit Online Shop
              </Button>
            </Link>
          </div>

        </Container>
      </section>

      {/* =====================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="bg-pink-50 py-24">
        <Container>

          <SectionTitle
            eyebrow="Client Love"
            title="What our clients say"
            description="We're building a salon experience where every client feels valued."
            centered
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="flex gap-1 text-pink-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  "{testimonial.text}"
                </p>

                <p className="mt-6 text-sm font-bold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* =====================================================
          GALLERY / INSTAGRAM
      ====================================================== */}

      <section className="py-24">
        <Container>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Follow Our Journey"
              title="Beauty in every detail"
              description="Our gallery will showcase styles, transformations and the Hair Radiance experience."
            />

            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700"
            >
              <span className="text-sm font-medium">Instagram</span>
              Follow us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">

            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 via-rose-50 to-white"
              >
                <div className="flex h-full items-center justify-center">
                  <Sparkles
                    size={30}
                    className="text-pink-300"
                  />
                </div>
              </div>
            ))}

          </div>

        </Container>
      </section>

      {/* =====================================================
          CONTACT / LOCATION
      ====================================================== */}

      <section className="border-t border-pink-100 bg-white py-16">
        <Container className="grid gap-8 md:grid-cols-3">

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-pink-50 p-3 text-pink-600">
              <MapPin size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Visit Us
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Salon location coming soon
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-pink-50 p-3 text-pink-600">
              <Clock3 size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Opening Hours
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Business hours coming soon
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="rounded-full bg-pink-50 p-3 text-pink-600">
              <Heart size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Hair Radiance by Kuhle
              </h3>

              <p className="mt-1 text-sm text-gray-600">
                Beauty • Hair • Confidence
              </p>
            </div>
          </div>

        </Container>
      </section>
    </>
  );
}