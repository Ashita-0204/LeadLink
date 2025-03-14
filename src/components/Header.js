import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="bg-[#0B1623] text-white py-4 px-8 shadow-md flex justify-between items-center -b-lg">
        <h1 className="text-2xl font-bold tracking-wide">LeadLink</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/landing"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Tickets
              </Link>
            </li>
            <li>
              <Link
                to="/tickets"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                All Tickets
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
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
