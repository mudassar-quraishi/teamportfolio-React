export default function Education({ education }) {
  if (!education || education.length === 0) return null;

  return (
    <section className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8">
      <h2 className="text-3xl font-bold text-center mb-10">Education</h2>

      <div className="relative max-w-2xl mx-auto py-5 before:absolute before:top-0 before:left-4 before:h-full before:w-1 before:bg-emerald-400">
        {education.map((edu, index) => (
          <div
            key={index}
            className="pl-12 relative mb-8 last:mb-0
            before:absolute before:top-1 before:left-2 before:w-6 before:h-6
            before:rounded-full before:bg-slate-700 before:border-4 before:border-emerald-400"
          >
            <h3 className="text-xl font-semibold mb-1">
              {edu.degree}
            </h3>
            <p className="text-slate-400 italic">
              {edu.institute}
              {edu.status && ` – ${edu.status}`}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

