import { useCart } from "../../context/CartContext";
import Container from "../../Components/ui/Container";

const Cart = () => {
  const { cart, setCart } = useCart();
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          return item;
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
  };
  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <section className="bg-[#111111] min-h-screen py-10">
      <Container>
        <h1 className="mb-8 text-4xl font-bold text-white">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <h2 className="text-xl text-zinc-400">Your cart is empty.</h2>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="mb-5 flex items-center justify-between rounded-xl bg-[#181818] p-5"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 rounded-lg"
                    />

                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-lime-400">${item.price}</p>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="rounded bg-zinc-700 px-3 py-1 text-white"
                        >
                          -
                        </button>

                        <span className="font-bold text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="rounded bg-lime-400 px-3 py-1 text-black"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeProduct(item.id)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Right Side */}
          <div className="h-fit rounded-xl bg-[#181818] p-6">
            <h2 className="mb-6 text-2xl font-bold text-white">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between text-zinc-300">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between text-zinc-300">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-zinc-300">
                <span>Shipping</span>
                <span className="text-lime-400">FREE</span>
              </div>

              <hr className="border-zinc-700" />

              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-lime-400 py-3 font-bold text-black transition hover:bg-lime-300">
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="mt-3 w-full rounded-xl border border-red-500 py-3 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
