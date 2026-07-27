import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#111111] px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-[#181818] p-8">
        <h1 className="mb-2 text-center text-4xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-center text-zinc-400">Join SkyMart today</p>

        {/* Full Name */}
        <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="mb-2 block text-white">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-lime-400"
          />
        </div>

        {/* Email */}

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

        <div className="mb-5">
          <label className="mb-2 block text-white">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-lime-400"
          />
        </div>

        {/* Confirm Password */}

        <div className="mb-6">
          <label className="mb-2 block text-white">Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            className="w-full rounded-xl border border-zinc-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-lime-400"
          />
        </div>

        <button
        type="submit"
         className="w-full rounded-xl bg-lime-400 py-3 font-bold text-black transition hover:scale-105">
          Create Account
        </button>

        <p className="mt-6 text-center text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-lime-400 hover:underline"
          >
            Login
          </Link>
        </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
