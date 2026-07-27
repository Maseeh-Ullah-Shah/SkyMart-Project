import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, LogOut, Zap } from "lucide-react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();

    alert("Logout Successful!");

    navigate("/");
  };

  return (
    <header className="border-b border-zinc-700 bg-[#111111] text-white">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-400">
              <Zap size={18} className="fill-black text-black" />
            </div>

            <h1 className="text-3xl font-bold text-white">
              Sky<span className="text-lime-400">Mart</span>
            </h1>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-400"
                    : "text-zinc-400 hover:text-lime-400"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-400"
                    : "text-zinc-400 hover:text-lime-400"
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-lime-400"
                    : "text-zinc-400 hover:text-lime-400"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* User */}
            {user ? (
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-3 rounded-xl border border-zinc-700 px-3 py-2 hover:bg-zinc-900 transition">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                    {user.fullName.charAt(0).toUpperCase()}
                  </div>

                  <span className="max-w-32 truncate text-sm">
                    {user.fullName}
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="rounded-xl border border-zinc-700 px-5 py-2 text-white transition hover:border-lime-400 hover:text-lime-400"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="rounded-xl bg-lime-400 px-5 py-2 font-semibold text-black transition hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              <ShoppingCart size={20} />
            </Link>

            <span className="bg-lime-400 text-black px-2 py-1 rounded-full text-sm font-bold">
              {cart.length}
            </span>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              <LogOut size={20} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
