import Container from "../ui/Container";
import { Truck, ShieldCheck, BadgeDollarSign } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your orders delivered quickly with our trusted shipping partners.",
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: "Secure Payments",
      description:
        "Every transaction is protected using industry-standard encryption.",
    },
    {
      id: 3,
      icon: BadgeDollarSign,
      title: "Best Prices",
      description: "We offer premium products at competitive prices every day.",
    },
  ];

  return (
    <section className="bg-[#111111] py-16">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-zinc-700 bg-[#181818] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-lime-400"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-lime-400/10">
                  <Icon size={32} className="text-lime-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeatureSection;
