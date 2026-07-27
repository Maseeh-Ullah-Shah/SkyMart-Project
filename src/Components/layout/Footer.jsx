import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="mt-1 border-t border-zinc-700 bg-[#111111]">

      <Container>

        <div className="flex flex-col items-center justify-center py-12">

          <h2 className="text-3xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-lime-400">Mart</span>
          </h2>

          <p className="mt-4 text-center text-sm text-zinc-500">
            © 2025 SkyMart • Built with React + Redux + TanStack Query
          </p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;