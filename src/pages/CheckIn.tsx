import React, { useState } from 'react';
import { sendCheckInToDiscord } from '../services/discord';
import { Check, Search } from 'lucide-react';

const CheckIn: React.FC = () => {
  const [bookingRef, setBookingRef] = useState('');
  const [robloxUsername, setRobloxUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingRef || !robloxUsername) return;

    setIsSubmitting(true);

    const checkIn = {
      bookingReference: bookingRef,
      robloxUsername
    };

    const success = await sendCheckInToDiscord(checkIn);

    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
    } else {
      alert('Failed to check in. Please try again.');
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto mt-20 px-4">
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#05164d] mb-4">You are checked in!</h2>
          <p className="text-gray-600 mb-6">
            Have a safe flight! Please report to the gate 15 minutes before departure.
          </p>
          <button 
            onClick={() => {
              setIsSuccess(false);
              setBookingRef('');
              setRobloxUsername('');
            }}
            className="w-full py-2 bg-[#ffb81c] text-[#05164d] font-bold rounded hover:bg-[#e5a519]"
          >
            Check In Another Passenger
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-20 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
        <h1 className="text-2xl font-bold text-[#05164d] mb-6 text-center">Online Check-In</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Booking Reference</label>
            <div className="relative">
              <input 
                type="text" 
                value={bookingRef}
                onChange={(e) => setBookingRef(e.target.value.toUpperCase())}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#ffb81c] focus:border-[#ffb81c] uppercase"
                placeholder="LH-XXXXXX"
                required
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Roblox Username</label>
            <input 
              type="text" 
              value={robloxUsername}
              onChange={(e) => setRobloxUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ffb81c] focus:border-[#ffb81c]"
              placeholder="e.g. RobloxPlayer123"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded font-bold transition-colors ${
              isSubmitting 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#05164d] text-white hover:bg-[#0a2370]'
            }`}
          >
            {isSubmitting ? 'Checking In...' : 'Check In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckIn;
