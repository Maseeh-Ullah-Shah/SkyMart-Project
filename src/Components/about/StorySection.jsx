import Container from "../ui/Container";

const StorySection = () => {
  return (
    <section className="bg-[#111111] py-12">
      <Container>
        <div className="rounded-3xl border border-zinc-700 bg-[#181818] p-10">
          <h2 className="text-4xl font-bold text-white">Our Story</h2>

          <p className="mt-6 leading-8 text-zinc-400">
            SkyMart started in 2022 as a small side project — two engineers
            tired of slow, bloated e-commerce experiences. We wanted to build an
            online store that feels fast, simple, and enjoyable for everyone.
          </p>

          <p className="mt-6 leading-8 text-zinc-400">
            Today SkyMart serves thousands of happy customers with products
            across electronics, fashion, furniture, home essentials, and much
            more — all at affordable prices.
          </p>

          <p className="mt-6 leading-8 text-zinc-400">
            We're still the same passionate team, focused on quality,
            transparency, and making every shopping experience better than the
            last.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default StorySection;
