import SectionTitle from "../../components/common/SectionTittle";

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle
          eyebrow="Our Story"
          title="About Hair Radiance by Kuhle"
          description="We are building a beauty experience focused on confidence, care and exceptional service."
          centered
        />
      </div>
    </section>
  );
}