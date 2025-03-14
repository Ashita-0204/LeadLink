
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <header className="bg-[#0B1623] text-white py-4 px-8 shadow-md flex justify-between items-center -b-lg">
        <h1 className="text-2xl font-bold tracking-wide">LeadLink</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/createuser"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
