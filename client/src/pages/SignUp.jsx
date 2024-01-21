import { Link, json } from "react-router-dom";
import React, { useState } from "react";
import { application } from "express";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4"> {/* onSubmit={handleSubmit} */}
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="Email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="Password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-600 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80">
          SIGN UP
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>

        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
