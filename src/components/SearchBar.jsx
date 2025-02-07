const SearchBar = ({ onSearch }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search images..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border p-2"
      />
    </div>
  );
};

export default SearchBar;
