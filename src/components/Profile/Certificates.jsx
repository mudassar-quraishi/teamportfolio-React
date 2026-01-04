export default function Certificates({ certificates }) {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section className="p-10 border border-slate-600 rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="text-center p-5 border border-slate-600 rounded-lg transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
            <img
              src={cert.image}
              alt={cert.title}
              className="h-32 w-full object-cover mb-4 rounded-md"
            />
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-4 py-2 rounded-lg font-bold bg-slate-600 border border-slate-500 hover:bg-slate-500 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
