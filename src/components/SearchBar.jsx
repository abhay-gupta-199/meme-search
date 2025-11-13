import { FiSearch } from "react-icons/fi";

function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center space-x-2 w-full max-w-3xl">
      <input
        type="text"
        placeholder="Search memes..."
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl shadow focus:outline-none"
      />

      <button className="bg-black text-white p-3 rounded-xl">
        <FiSearch size={20} />
      </button>
    </div>
  );
}

export default SearchBar;
