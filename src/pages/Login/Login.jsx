import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
    const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found. Please register first.");
      return;
    }

    if (
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      login(savedUser);

      alert("Login Successful!");

      navigate("/");
    } else {
      alert("Invalid email or password.");
    }
  };
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#111111] px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-[#181818] p-8">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Login to continue shopping
        </p>

        {/* Email */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="mb-2 block text-white">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          {/* Password */}

          <div className="mb-6">
            <label className="mb-2 block text-white">Password</label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-lime-400"
            />
          </div>

          {/* Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-lime-400 py-3 font-bold text-black transition hover:scale-105"
          >
            Login
          </button>

          {/* Register */}

          <p className="mt-6 text-center text-zinc-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-lime-400 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
