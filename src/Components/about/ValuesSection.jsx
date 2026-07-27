import Container from "../ui/Container";
import { values } from "../../data/aboutData";

const ValuesSection = () => {
  return (
    <section className="bg-[#111111] py-16">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          What We Stand For
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.id}
                className="flex gap-5 rounded-2xl border border-zinc-700 bg-[#181818] p-6 transition hover:border-lime-400"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/10">
                  <Icon size={26} className="text-lime-400" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-2 leading-7 text-zinc-400">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ValuesSection;