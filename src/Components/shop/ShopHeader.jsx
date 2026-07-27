import Container from "../ui/Container";

const ShopHeader = () => {
  return (
    <section className="bg-[#111111] pt-10">
      <Container>

        <h1 className="text-5xl font-bold text-white">
          All Products
        </h1>

        <p className="mt-2 text-zinc-400">
          50 products found
        </p>

      </Container>
    </section>
  );
};

export default ShopHeader;