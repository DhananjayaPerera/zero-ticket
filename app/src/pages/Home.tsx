export default function Home() {
  const go = () => window.location.href = "/results";
  return (
    <div className="max-w-3xl mx-auto p-6 grid gap-4">
      <h2 className="text-2xl font-semibold">Find legal, low-cost parking</h2>
      <button onClick={go} className="px-4 py-2 rounded-xl bg-black text-white">
        Search (demo)
      </button>
    </div>
  );
}
