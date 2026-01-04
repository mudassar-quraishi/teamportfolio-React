export default function Hero() {
  return (
    <section className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8">
      <div className="flex items-center gap-10">
        <div
          className="w-1/2 h-80 rounded-lg bg-cover bg-center"
          style={{ backgroundImage: "url(/images/website.jpg)" }}
        />
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-3">
            We are a Team of 4 Developers
          </h1>
          <p className="text-lg text-slate-400 mb-6">
            We love building creative and functional web solutions.
          </p>
          <div className="space-x-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-lg font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-500 transition"
            >
              Our Projects
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg font-bold text-slate-100 bg-slate-600 border border-slate-500 hover:bg-slate-500 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
