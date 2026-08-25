import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";
import SectionTitle from "../../components/common/SectionTittle";

export default function HomePage() {
  const services = [
    {
      title: "Hair Styling",
      description:
        "Beautiful styles created to suit your personality and occasion.",
    },
    {
      title: "Hair Treatments",
      description:
        "Nourishing treatments designed to help your hair look and feel healthier.",
    },
    {
      title: "Braiding",
      description:
        "Professional braiding styles with attention to detail and comfort.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-pink-600 shadow-sm">
              <Sparkles size={16} />
              Beauty • Hair • Confidence
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-950 md:text-6xl">
              Your hair deserves its own{" "}
              <span className="text-pink-600">radiance.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Welcome to Hair Radiance by Kuhle, where professional
              hair care, beauty and personal style come together.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/booking">
                <Button>
                  Book Appointment
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>

              <Link to="/services">
                <Button variant="outline">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <CalendarDays size={18} className="text-pink-600" />
              Easy online booking coming with our appointment system.
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-pink-100 shadow-2xl">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-white">
                <div className="text-center">
                  <Sparkles
                    size={60}
                    className="mx-auto text-pink-500"
                  />

                  <p className="mt-5 text-2xl font-semibold text-gray-800">
                    Hair Radiance
                  </p>

                  <p className="mt-1 text-sm tracking-[0.25em] text-pink-600">
                    BY KUHLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="What We Do"
            title="Beauty services made for you"
            description="From everyday styling to special occasions, our services are designed around quality, care and confidence."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-50 text-pink-600">
                  <Sparkles size={24} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700"
                >
                  View service
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready for your next look?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-pink-100">
            Book your appointment with Hair Radiance by Kuhle and
            let us help you bring your style to life.
          </p>

          <div className="mt-7">
            <Link to="/booking">
              <button className="rounded-full bg-white px-7 py-3 font-semibold text-pink-600 shadow-lg transition hover:bg-pink-50">
                Book Your Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}