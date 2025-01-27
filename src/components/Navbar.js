import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-5 px-8 shadow-lg flex justify-between items-center rounded-b-2xl">
      <h1 className="text-2xl font-extrabold tracking-wide">LeadLink</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-lg font-medium hover:text-gray-200 transition-colors">Home</Link></li>
          <li><Link to="/createuser" className="text-lg font-medium hover:text-gray-200 transition-colors">Signup</Link></li>
          {/* <li><Link to="/about" className="text-lg font-medium hover:text-gray-200 transition-colors">About</Link></li>
          <li><Link to="/contact" className="text-lg font-medium hover:text-gray-200 transition-colors">Contact</Link></li> */}
        </ul>
      </nav>
    </header>
    </div>
  )
}
