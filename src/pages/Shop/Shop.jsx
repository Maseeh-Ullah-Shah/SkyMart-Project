import ShopHeader from "../../Components/shop/ShopHeader.jsx";
import FilterBar from "../../Components/shop/FilterBar.jsx";
import ProductGrid from "../../Components/products/productGrid.jsx";
import { useState } from "react";

console.log(ProductGrid);
const Shop = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  return (
    <>
      <ShopHeader />

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ProductGrid search={search} category={category} sortBy={sortBy} cart={cart}
  setCart={setCart}/>
    </>
  );
};

export default Shop;
