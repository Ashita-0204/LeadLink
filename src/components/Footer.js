import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-6 px-8 text-center shadow-inner -t-2xl w-full absolute bottom-0">
       <p className="text-sm">&copy; {new Date().getFullYear()} LeadLink. Crafted with care for seamless connections.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </footer>
    </div>
  )
}
