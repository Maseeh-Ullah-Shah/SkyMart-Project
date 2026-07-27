import HeroSection from "../../Components/home/HeroSection";
import StatsSection from "../../Components/home/StatsSection";
import CategorySection from "../../Components/home/CategorySection";
import ProductSection from "../../Components/home/ProductSection";
import FeatureSection from "../../Components/home/FeatureSection";

import products from "../../data/products";

const Home = () => {

  const topRatedProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const newArrivalProducts = [...products]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  return (
    <>
      <HeroSection />

      <StatsSection />

      <CategorySection />

      <ProductSection
        title="⭐ Top Rated Products"
        products={topRatedProducts}
      />

      <ProductSection
        title="🆕 New Arrivals"
        products={newArrivalProducts}
      />
      <FeatureSection />
    </>
  );
};

export default Home;