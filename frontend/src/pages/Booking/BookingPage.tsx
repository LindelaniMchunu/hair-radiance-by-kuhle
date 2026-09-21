import SectionTitle from "../../components/common/SectionTittle";

export default function BookingPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4">
        <SectionTitle
          eyebrow="Appointments"
          title="Book Your Appointment"
          description="Our online booking system will allow you to select a service, date and available time."
          centered
        />
      </div>
    </section>
  );
}