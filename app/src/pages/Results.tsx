import { useLocation, Link } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const postcode = params.get("postcode");
  const duration = params.get("duration");

  const options = [
    { id: "bay_001", name: "Bay 23, High St", walkMins: 7, price: 2.8 },
    { id: "carpark_014", name: "Riverside Car Park", walkMins: 11, price: 3.5 },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 grid gap-4">
      <h2 className="text-xl font-semibold">Results</h2>
      {postcode && duration && (
        <p className="text-gray-600">
          Showing options near <strong>{postcode}</strong> for{" "}
          <strong>{duration}</strong> hours
        </p>
      )}
      <ul className="grid gap-3">
        {options.map((o) => (
          <li
            key={o.id}
            className="border rounded-2xl p-4 flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{o.name}</div>
              <div className="text-xs text-gray-500">
                {o.walkMins} min walk
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold">£{o.price.toFixed(2)}</div>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/" className="underline text-sm mt-4">
        ← Change search
      </Link>
    </div>
  );
}
