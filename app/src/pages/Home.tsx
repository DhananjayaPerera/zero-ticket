// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [postcode, setPostcode] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Pass the inputs to Results via query params
    navigate(`/results?postcode=${postcode}&duration=${duration}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">Find legal, low-cost parking</h1>
        
        <input
          type="text"
          placeholder="Enter postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="number"
          placeholder="Duration (hours)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </div>
    </div>
  );
}
