import { Link } from "react-router-dom";
import { team } from "../../data/team";

export default function NavBar({ current }) {
  return (
    <nav className="my-6 p-4 bg-slate-600 rounded-lg shadow-sm">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <Link
          to="/"
          className="px-4 py-2 rounded-full font-medium text-slate-100 hover:bg-emerald-400 hover:text-slate-900 transition duration-300"
        >
          ← Back to Home
        </Link>

        {team.map(member => (
          <Link
            key={member.slug}
            to={`/profile/${member.slug}`}
            className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
              member.slug === current
                ? "bg-emerald-400 text-slate-900"
                : "text-slate-100 hover:bg-emerald-400 hover:text-slate-900"
            }`}
          >
            {member.name.split(" ")[0]}
          </Link>
        ))}
      </div>
    </nav>
  );
}
