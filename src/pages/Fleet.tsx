import React from 'react';
import { fleet } from '../data/fleet';
import { Users, Grid } from 'lucide-react';

const Fleet: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-[#05164d] sm:text-4xl">Our Fleet</h1>
        <p className="mt-4 text-xl text-gray-500">Discover the modern aircraft of Lufthansa PTFS.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {fleet.map((aircraft) => (
          <div key={aircraft.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="h-64 overflow-hidden">
              <img 
                src={aircraft.image} 
                alt={aircraft.name} 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#05164d] mb-2">{aircraft.name}</h3>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#ffb81c]" />
                  <span>{aircraft.capacity} Seats</span>
                </div>
                <div className="flex items-center">
                  <Grid className="h-5 w-5 mr-2 text-[#ffb81c]" />
                  <span>{aircraft.rows} Rows</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;
