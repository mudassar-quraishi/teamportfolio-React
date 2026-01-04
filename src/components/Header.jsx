export default function Header() {
  return (
    <header className="bg-slate-700 p-5 shadow-md border-b border-slate-600">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="text-emerald-400"
          >
            <path d="M10.478 1.647a.5.5 0 1 0-.956.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
          </svg>

          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500">
            Team Portfolio
          </h1>
        </div>
      </div>
    </header>
  );
}
