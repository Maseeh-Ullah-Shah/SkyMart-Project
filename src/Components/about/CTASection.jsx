import { Link } from "react-router-dom";
import Container from "../ui/Container";

const CTASection = () => {
  return (
    <section className="bg-[#111111] py-20">
      <Container>
        <div className="rounded-3xl bg-lime-400 p-12 text-center">
          <h2 className="text-4xl font-bold text-black">
            Ready to Start Shopping?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-800">
            Discover thousands of high-quality products with fast delivery,
            secure payments, and unbeatable prices.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            Browse Products
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
