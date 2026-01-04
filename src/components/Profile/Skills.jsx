const skills = [
  {
    name: "HTML",
    description:
      "Structuring clean, semantic, and accessible web content is the foundation of everything we build.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-emerald-400" fill="currentColor">
        <path d="M1.393 4.22l8.832 4.416-8.832 4.416v-8.832zm1.407-1.407l10.24 5.12-10.24 5.12v-10.24zm10.748 12.358l8.832-4.416-8.832-4.416v8.832zm1.407 1.407l-10.24-5.12 10.24-5.12v10.24z"/>
      </svg>
    ),
  },
  {
    name: "CSS",
    description:
      "We create visually appealing and responsive layouts using modern CSS techniques for a great user experience on any device.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-emerald-400" fill="currentColor">
        <path d="M1.393 4.22l8.832 4.416-8.832 4.416v-8.832zm1.407-1.407l10.24 5.12-10.24 5.12v-10.24zm10.748 12.358l8.832-4.416-8.832-4.416v8.832zm1.407 1.407l-10.24-5.12 10.24-5.12v10.24z"/>
      </svg>
    ),
  },
  {
    name: "Designing",
    description:
      "Focusing on user-centric principles to design intuitive, engaging, and aesthetically pleasing interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-emerald-400" fill="currentColor">
        <path d="M1.393 4.22l8.832 4.416-8.832 4.416v-8.832zm1.407-1.407l10.24 5.12-10.24 5.12v-10.24zm10.748 12.358l8.832-4.416-8.832-4.416v8.832zm1.407 1.407l-10.24-5.12 10.24-5.12v10.24z"/>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {skills.map(skill => (
          <div
            key={skill.name}
            className="bg-slate-600 p-6 rounded-lg border border-slate-500 transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-slate-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
