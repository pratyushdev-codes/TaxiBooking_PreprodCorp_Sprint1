import React from "react";
import logo from "../assets/logo.png";

function SignUpPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <img src={logo} alt="Logo" className="mb-4 w-20" />
      <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-sm">
        <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
        <div className="mb-3">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Street Name"
          />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
          Save
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
