import { Link } from "react-router-dom";
import { team } from "../data/team";

export default function Team() {
  return (
    <section
      id="team"
      className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((member) => (
          <Link
            key={member.slug}
            to={`/profile/${member.slug}`}
            className="text-center text-slate-100 hover:scale-105 transition duration-300"
          >
            <img
              src={member.image}
              alt={`Profile picture of ${member.name}`}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 ring-2 ring-emerald-400"
            />
            <h3 className="text-xl font-semibold">
              {member.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
