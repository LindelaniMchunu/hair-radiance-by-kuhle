import SectionTitle from "../../components/common/SectionTittle";

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Our Services"
          title="Services & Price List"
          description="Explore our professional salon services."
          centered
        />
      </div>
    </section>
  );
}