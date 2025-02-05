import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-5 px-8 shadow-lg flex justify-between items-center rounded-b-2xl">
        <h1 className="text-2xl font-extrabold tracking-wide">LeadLink</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/landing"
                className="text-lg font-medium hover:text-gray-200 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/tickets/add"
                className="text-lg font-medium hover:text-gray-200 transition-colors"
              >
                Tickets
              </Link>
            </li>
            <li>
              <Link
                to="/logout"
                className="text-lg font-medium hover:text-gray-200 transition-colors"
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
