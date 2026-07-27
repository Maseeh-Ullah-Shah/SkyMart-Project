import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { useAuth } from "../../context/AuthContext";

const HeroSection = () => {
  const { user } = useAuth();
  const currentHour = new Date().getHours();

  let greeting = "";

  if (currentHour < 12) {
    greeting = "Good Morning 👋";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon 👋";
  } else {
    greeting = "Good Evening 👋";
  }
  return (
    <section className="bg-[#111111] py-12">
      <Container>
        <div className="rounded-3xl border border-zinc-700 bg-[#161616] p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side */}
            <div className="max-w-xl">
              <p className="mb-4 text-sm uppercase tracking-[4px] text-lime-400">
                {greeting}
              </p>

              <h1 className="text-5xl font-bold leading-tight text-white">
                {user ? (
                  <>
                    Welcome back,
                    <br />
                    <span className="text-lime-400">{user.fullName}!</span>
                  </>
                ) : (
                  <>
                    Welcome to
                    <br />
                    <span className="text-lime-400">SkyMart!</span>
                  </>
                )}
              </h1>

              <p className="mt-6 text-lg text-zinc-400">
                Discover today's picks — hand-curated products across
                electronics, fashion, furniture and more.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/shop"
                  className="flex items-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/shop"
                  className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-lime-400 hover:text-lime-400"
                >
                  View All Products
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-5">
              <div className="rounded-2xl border border-lime-500 bg-lime-400/10 p-8 text-center">
                <h2 className="text-5xl font-bold text-lime-400">20+</h2>

                <p className="mt-2 text-zinc-300">Products Available</p>
              </div>

              <div className="rounded-2xl border border-zinc-700 p-8 text-center">
                <h2 className="text-5xl font-bold text-white">Free</h2>

                <p className="mt-2 text-zinc-400">Delivery on $999+</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
