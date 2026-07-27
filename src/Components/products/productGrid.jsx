import products from "../../data/products";
import ProductCard from "./ProductCard";
import Container from "../ui/Container";

const ProductGrid = ({ search, category, sortBy }) => {

  const searchFiltered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredProducts = searchFiltered.filter((product) => {
    if (category === "All") return true;

    return product.category === category;
  });
  let finalProducts = [...filteredProducts];

switch (sortBy) {
  case "low-high":
    finalProducts.sort((a, b) => a.price - b.price);
    break;

  case "high-low":
    finalProducts.sort((a, b) => b.price - a.price);
    break;

  case "rating":
    finalProducts.sort((a, b) => b.rating - a.rating);
    break;

  default:
    break;
}

  return (
    <section className="bg-[#111111] py-8">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {finalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;
