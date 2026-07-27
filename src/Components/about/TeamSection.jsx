import Container from "../ui/Container";
import { team } from "../../data/aboutData";

const TeamSection = () => {
  return (
    <section className="bg-[#111111] py-16">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold text-white">
          Meet Our Team
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-zinc-700 bg-[#181818] p-8 text-center transition hover:border-lime-400"
            >
              {/* Avatar */}

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-3xl font-bold text-black">
                {member.avatar}
              </div>

              {/* Name */}

              <h3 className="mt-5 text-xl font-semibold text-white">
                {member.name}
              </h3>

              {/* Role */}

              <p className="mt-2 text-zinc-400">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
