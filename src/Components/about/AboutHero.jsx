import { Zap } from "lucide-react";
import Container from "../ui/Container";

const AboutHero = () => {
  return (
    <section className="bg-[#111111] pt-20 pb-12">
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* Icon */}

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400">
            <Zap size={30} className="fill-black text-black" />
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-bold text-white">
            About <span className="text-lime-400">SkyMart</span>
          </h1>

          {/* Paragraph */}

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable for everyone.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
