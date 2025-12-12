import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-[#05164d] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://pixabay.com/get/g6b24b6d74b9dd63011fa96e20467889c68d119301781315eeffd8b1371561098d15c847d692d6d382a5576f5a9573358beb2afcb3441680bf0743712c98cd265_1280.jpg" 
            alt="Lufthansa 747" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05164d] to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Welcome to <span className="text-[#ffb81c]">Lufthansa PTFS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
            Experience the ultimate luxury in Roblox aviation. Fly with us to destinations around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/booking" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#05164d] bg-[#ffb81c] hover:bg-[#e5a519] transition-colors"
            >
              Book a Flight
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/check-in" 
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Check In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <Globe className="h-12 w-12 text-[#05164d] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Destinations</h3>
              <p className="text-gray-600">We fly to major hubs across the PTFS map, connecting you to the world.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <CheckCircle className="h-12 w-12 text-[#05164d] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Check-In</h3>
              <p className="text-gray-600">Seamless booking and check-in process integrated with Discord.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
              <div className="h-12 w-12 flex items-center justify-center bg-[#ffb81c] rounded-full text-[#05164d] font-bold text-xl mb-4">L</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">First Class Service</h3>
              <p className="text-gray-600">Our fleet features the latest aircraft with premium seating options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
