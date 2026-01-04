export default function Services() {
  return (
    <section
      id="services"
      className="p-10 border border-slate-600 rounded-xl shadow-sm mb-8"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Web Development */}
        <div className="bg-slate-600 p-6 rounded-lg text-center border border-slate-500 hover:shadow-lg transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 256 256"
            className="mx-auto mb-5 text-emerald-400"
            fill="currentColor"
          >
            <path d="M74.34,179.66a8,8,0,0,1,0-11.32L114.69,128,74.34,87.66a8,8,0,0,1,11.32-11.32l46,46a8,8,0,0,1,0,11.32l-46,46A8,8,0,0,1,74.34,179.66Zm107.32-11.32L141.31,128l40.35-40.34a8,8,0,0,0-11.32-11.32l-46,46a8,8,0,0,0,0,11.32l46,46a8,8,0,0,0,11.32-11.32Z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">
            Web Development
          </h3>
          <p className="text-slate-400 text-sm">
            We build responsive, high-performance websites tailored to your business needs.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-slate-600 p-6 rounded-lg text-center border border-slate-500 hover:shadow-lg transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 256 256"
            className="mx-auto mb-5 text-emerald-400"
            fill="currentColor"
          >
            <path d="M224,136v80a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h80a8,8,0,0,1,0,16H48V208H208V136a8,8,0,0,1,16,0ZM184,32h21.66a8,8,0,0,0,5.65-2.34l.35-.35a8,8,0,0,0,0-11.32l-10.34-10.34a8,8,0,0,0-11.32,0l-.35.35A8,8,0,0,0,184,13.66V32Zm45.66,2.34a8,8,0,0,0-11.32,0L131.66,121a8,8,0,0,0-2.34,5.66V152a8,8,0,0,0,8,8h25.34a8,8,0,0,0,5.66-2.34L255,70.34a8,8,0,0,0,0-11.32ZM158.69,144H144v-14.7l72-72L230.7,72Z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">
            UI / UX Design
          </h3>
          <p className="text-slate-400 text-sm">
            Creating intuitive and engaging user interfaces for a seamless user experience.
          </p>
        </div>

        {/* Database Management */}
        <div className="bg-slate-600 p-6 rounded-lg text-center border border-slate-500 hover:shadow-lg transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 256 256"
            className="mx-auto mb-5 text-emerald-400"
            fill="currentColor"
          >
            <path d="M208,88H48a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V96A8,8,0,0,0,208,88Zm-32,48a16,16,0,1,1-16-16A16,16,0,0,1,176,136ZM48,72H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v16A8,8,0,0,0,48,72Zm128-16a16,16,0,1,1-16-16A16,16,0,0,1,176,56Z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">
            Database Management
          </h3>
          <p className="text-slate-400 text-sm">
            Efficient and secure database solutions to handle your data effectively.
          </p>
        </div>

      </div>
    </section>
  );
}
