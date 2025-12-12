import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05164d] text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-[#ffb81c]">Lufthansa Airlines PTFS</h3>
            <p className="text-sm text-gray-300 mt-1">Experience the best virtual flying in Roblox.</p>
          </div>
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lufthansa PTFS. Not affiliated with real Lufthansa.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
