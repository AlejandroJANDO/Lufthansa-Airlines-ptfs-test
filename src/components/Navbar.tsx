import React from 'react';
import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#05164d] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-[#ffb81c]" />
              <span className="font-bold text-xl tracking-wider">LUFTHANSA PTFS</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-[#0a2370] px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/booking" className="hover:bg-[#0a2370] px-3 py-2 rounded-md text-sm font-medium transition-colors">Book Flight</Link>
              <Link to="/check-in" className="hover:bg-[#0a2370] px-3 py-2 rounded-md text-sm font-medium transition-colors">Check-In</Link>
              <Link to="/fleet" className="hover:bg-[#0a2370] px-3 py-2 rounded-md text-sm font-medium transition-colors">Our Fleet</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
