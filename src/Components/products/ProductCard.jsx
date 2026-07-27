import { useCart } from "../../context/CartContext";

const ProductCard = ({ product}) => {
  const { cart, setCart } = useCart();
 const handleAddToCart = () => {
  const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  } else {
    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-[#181818] transition duration-300 hover:-translate-y-2 hover:border-lime-400">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <span className="rounded-full bg-zinc-700 px-2 py-1 text-xs text-zinc-300">
          {product.category}
        </span>

        <h3 className="mt-3 text-white font-semibold line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-lime-400">${product.price}</p>

          <button
            onClick={handleAddToCart}
            className="rounded-lg bg-lime-400 px-3 py-2 text-sm font-semibold text-black hover:scale-105 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
