import Container from "../ui/Container";
import { Package, Users, Star, Truck } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: Package,
      value: "20K+",
      label: "Products",
    },
    {
      id: 2,
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      id: 3,
      icon: Star,
      value: "4.9",
      label: "Avg. Rating",
    },
    {
      id: 4,
      icon: Truck,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  return (
    <section className="bg-[#111111] pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-700 bg-[#181818] p-8 text-center transition hover:border-lime-400"
              >
                <Icon size={26} className="mx-auto mb-4 text-lime-400" />

                <h2 className="text-3xl font-bold text-white">{item.value}</h2>

                <p className="mt-2 text-zinc-400">{item.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
