import Container from "../ui/Container";

const FilterBar = ({
  search,
  setSearch,
  category,
  setCategory,
  sortBy,
  setSortBy,
}) => {
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <section className="bg-[#111111] py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Search */}

          <input
            onClick={() => console.log("Input Clicked")}
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={handleSearch}
            className="w-full rounded-xl border border-zinc-700 bg-[#181818] px-5 py-3 text-white outline-none focus:border-lime-400"
          />

          {/* Category */}

          <select
            value={category}
            onChange={(e) => {
              console.log("Selected:", e.target.value);
              setCategory(e.target.value);
            }}
            className="rounded-xl border border-zinc-700 bg-[#181818] px-5 py-3 text-white outline-none focus:border-lime-400"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
            <option value="Home">Home</option>
          </select>

          {/* Sort */}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-zinc-700 bg-[#181818] px-5 py-3 text-white outline-none focus:border-lime-400"
          >
            <option value="featured">Featured</option>
            <option value="low-high">Price Low → High</option>
            <option value="high-low">Price High → Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </Container>
    </section>
  );
};

export default FilterBar;
