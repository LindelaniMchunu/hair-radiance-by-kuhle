import SectionTitle from "../../components/common/SectionTittle";

export default function ShopPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle
          eyebrow="Hair Products"
          title="Shop Our Products"
          description="Quality hair products will be available through our online store."
          centered
        />
      </div>
    </section>
  );
}