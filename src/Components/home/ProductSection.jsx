import Container from "../ui/Container";
import ProductCard from "../products/ProductCard";
import { useCart } from "../../context/CartContext";

const ProductSection = ({ title, products }) => {
  const { cart, setCart } = useCart();

  return (
    <section className="bg-[#111111] py-12">
      <Container>

        {/* Heading */}

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>

          <button className="rounded-xl border border-zinc-700 px-5 py-2 text-white transition hover:border-lime-400 hover:text-lime-400">
            View All
          </button>

        </div>

        {/* Products */}

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default ProductSection;