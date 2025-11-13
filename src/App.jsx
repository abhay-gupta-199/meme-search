import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MemeCard from "./components/MemeCard";

function App() {
  const [searchText, setSearchText] = useState("");
  const [allMemes, setAllMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);

  // Fetch memes once
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const json = await res.json();
        setAllMemes(json.data.memes);
        setFilteredMemes(json.data.memes);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchMemes();
  }, []);

  // DYNAMIC search - runs every time the search text changes
  useEffect(() => {
    const lower = searchText.toLowerCase();

    const filtered = allMemes.filter((meme) =>
      meme.name.toLowerCase().includes(lower)
    );

    setFilteredMemes(filtered);
  }, [searchText, allMemes]); // runs whenever typing happens

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8">Meme Search</h1>

      <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Meme Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 w-full max-w-6xl">
        {filteredMemes.map((item) => (
          <MemeCard key={item.id} data={item} />
        ))}
      </div>

      {filteredMemes.length > 0 && (
        <p className="mt-6 text-gray-700 text-lg">
          Found {filteredMemes.length} memes
        </p>
      )}
    </div>
  );
}

export default App;
