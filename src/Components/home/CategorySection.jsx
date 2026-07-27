import Container from "../ui/Container";
import {
  Laptop,
  Shirt,
  Sofa,
  Home,
  Dumbbell,
  Watch,
} from "lucide-react";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: Laptop,
    },
    {
      id: 2,
      name: "Clothing",
      icon: Shirt,
    },
    {
      id: 3,
      name: "Furniture",
      icon: Sofa,
    },
    {
      id: 4,
      name: "Home",
      icon: Home,
    },
    {
      id: 5,
      name: "Sports",
      icon: Dumbbell,
    },
    {
      id: 6,
      name: "Accessories",
      icon: Watch,
    },
  ];

  return (
    <section className="bg-[#111111] py-12">
      <Container>
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Shop By Category
          </h2>

          <p className="mt-3 text-zinc-400">
            Explore products across multiple categories
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="cursor-pointer rounded-2xl border border-zinc-700 bg-[#181818] p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-400"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-400/10">
                  <Icon
                    size={30}
                    className="text-lime-400"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-zinc-400">
                  Browse {category.name} products
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;