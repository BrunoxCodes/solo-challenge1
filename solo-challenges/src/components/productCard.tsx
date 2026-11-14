import useLocalStorage from "../customHooks/useLocalStorage";

export default function ProductCard() {
    const {stored,setStored} = useLocalStorage()
  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-48 bg-slate-100">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Headphones"
          className="h-full w-full object-cover"
        />

        <button
          onClick={() => setStored(!stored)}
          aria-pressed={stored}
          aria-label={stored ? "Remove from favorites" : "Add to favorites"}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition active:scale-90 ${
            stored ? "text-rose-500" : "text-slate-500 hover:text-rose-500"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill={stored ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <p className="text-sm text-slate-500">Audio</p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">
          Studio Wireless Headphones
        </h3>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-slate-900">$129</span>
          <button className="rounded-lg cursor-pointer bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            {stored ? "Add to Cart" : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};