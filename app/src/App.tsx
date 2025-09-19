import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="border-b bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-semibold text-lg">ZeroTicket</Link>
            <nav className="text-sm flex gap-4">
              <Link to="/" className="hover:underline">Search</Link>
              <Link to="/results" className="hover:underline">Results</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>

        <footer className="border-t">
          <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-gray-500">
            © {new Date().getFullYear()} ZeroTicket – MVP
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
