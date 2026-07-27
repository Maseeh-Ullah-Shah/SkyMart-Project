import { ShoppingBag, TrendingUp, Star, Tag } from "lucide-react";
import Container from "../ui/Container";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <ShoppingBag size={24} />,
      value: "0",
      title: "Cart Items",
      subtitle: "In your bag",
      color: "bg-lime-400/10 text-lime-400",
    },
    {
      id: 2,
      icon: <TrendingUp size={24} />,
      value: "$0.00",
      title: "Cart Value",
      subtitle: "Ready to checkout",
      color: "bg-blue-500/10 text-blue-400",
    },
    {
      id: 3,
      icon: <Star size={24} />,
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
      color: "bg-yellow-500/10 text-yellow-400",
    },
    {
      id: 4,
      icon: <Tag size={24} />,
      value: "6",
      title: "Categories",
      subtitle: "To explore",
      color: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <section className="bg-[#111111] pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-700 bg-[#181818] p-6 transition duration-300 hover:-translate-y-2 hover:border-lime-400"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold text-white">{item.value}</h2>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-400">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
