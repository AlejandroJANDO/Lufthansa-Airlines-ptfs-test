import React, { useState } from 'react';
import { flights } from '../data/flights';
import { fleet } from '../data/fleet';
import { sendBookingToDiscord } from '../services/discord';
import SeatMap from '../components/SeatMap';
import { Flight } from '../types';
import { Calendar, Clock, Plane, Check } from 'lucide-react';

const Booking: React.FC = () => {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [robloxUsername, setRobloxUsername] = useState('');
  const [discordUsername, setDiscordUsername] = useState('');
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setStep(2);
    window.scrollTo(0, 0);
  };

  const generateBookingReference = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'LH-';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFlight || !selectedSeat || !robloxUsername || !discordUsername) return;

    setIsSubmitting(true);
    const ref = generateBookingReference();
    setBookingRef(ref);

    const booking = {
      flightId: selectedFlight.id,
      robloxUsername,
      discordUsername,
      seat: selectedSeat,
      bookingReference: ref
    };

    const success = await sendBookingToDiscord(booking, selectedFlight);

    setIsSubmitting(false);
    if (success) {
      setStep(3);
      window.scrollTo(0, 0);
    } else {
      alert('Failed to submit booking. Please try again.');
    }
  };

  const getAircraft = (id: string) => fleet.find(a => a.id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#05164d]">Book a Flight</h1>
        <div className="flex items-center mt-4 space-x-4 text-sm">
          <div className={`flex items-center ${step >= 1 ? 'text-[#ffb81c] font-bold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mr-2 ${step >= 1 ? 'border-[#ffb81c] bg-[#ffb81c] text-[#05164d]' : 'border-gray-300'}`}>1</div>
            Select Flight
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-[#ffb81c]' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${step >= 2 ? 'text-[#ffb81c] font-bold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mr-2 ${step >= 2 ? 'border-[#ffb81c] bg-[#ffb81c] text-[#05164d]' : 'border-gray-300'}`}>2</div>
            Details & Seat
          </div>
          <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-[#ffb81c]' : 'bg-gray-300'}`}></div>
          <div className={`flex items-center ${step >= 3 ? 'text-[#ffb81c] font-bold' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 mr-2 ${step >= 3 ? 'border-[#ffb81c] bg-[#ffb81c] text-[#05164d]' : 'border-gray-300'}`}>3</div>
            Confirmation
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="grid gap-6">
          {flights.map((flight) => {
            const aircraft = getAircraft(flight.aircraftId);
            return (
              <div key={flight.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:border-[#ffb81c] transition-colors flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#05164d] text-white text-xs font-bold px-2 py-1 rounded mr-3">{flight.flightNumber}</span>
                    <span className="text-gray-500 text-sm flex items-center"><Plane className="w-4 h-4 mr-1" /> {aircraft?.name}</span>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{new Date(flight.departureTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                      <div className="text-gray-500">{flight.origin}</div>
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-gray-300 relative mx-4">
                        <Plane className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-gray-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{new Date(flight.arrivalTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                      <div className="text-gray-500">{flight.destination}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(flight.departureTime).toLocaleDateString()}
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8 flex flex-col items-end">
                  <div className="text-2xl font-bold text-[#05164d] mb-2">${flight.price}</div>
                  <button 
                    onClick={() => handleFlightSelect(flight)}
                    className="bg-[#ffb81c] text-[#05164d] font-bold py-2 px-6 rounded hover:bg-[#e5a519] transition-colors"
                  >
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {step === 2 && selectedFlight && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#05164d] mb-4">Passenger Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Discord Username</label>
                  <input 
                    type="text" 
                    value={discordUsername}
                    onChange={(e) => setDiscordUsername(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#ffb81c] focus:border-[#ffb81c]"
                    placeholder="e.g. discorduser"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-[#05164d] mb-4">Select Seat</h2>
              {getAircraft(selectedFlight.aircraftId) && (
                <SeatMap 
                  aircraft={getAircraft(selectedFlight.aircraftId)!} 
                  selectedSeat={selectedSeat}
                  onSelectSeat={setSelectedSeat}
                />
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-[#05164d] mb-4">Booking Summary</h2>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Flight</span>
                  <span className="font-bold">{selectedFlight.flightNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Route</span>
                  <span className="font-bold">{selectedFlight.origin} - {selectedFlight.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date</span>
                  <span className="font-bold">{new Date(selectedFlight.departureTime).toLocaleDateString()}</span>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-[#05164d]">${selectedFlight.price}</span>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={!selectedSeat || !robloxUsername || !discordUsername || isSubmitting}
                className={`w-full mt-6 py-3 rounded font-bold text-center transition-colors ${
                  !selectedSeat || !robloxUsername || !discordUsername || isSubmitting
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#ffb81c] text-[#05164d] hover:bg-[#e5a519]'
                }`}
              >
                {isSubmitting ? 'Processing...' : 'Confirm Booking'}
              </button>
              <button 
                onClick={() => setStep(1)}
                className="w-full mt-3 py-2 text-gray-500 hover:text-gray-700 text-sm"
              >
                Back to Flights
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-lg shadow-lg border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#05164d] mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for flying with Lufthansa PTFS. Your booking has been confirmed and sent to our Discord.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8 inline-block text-left w-full">
            <div className="text-sm text-gray-500 mb-1">Booking Reference</div>
            <div className="text-3xl font-mono font-bold text-[#05164d] tracking-wider">{bookingRef}</div>
            <p className="text-xs text-red-500 mt-2">* Save this reference for check-in</p>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => {
                setStep(1);
                setSelectedSeat(null);
                setRobloxUsername('');
                setDiscordUsername('');
                setSelectedFlight(null);
              }}
              className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            >
              Book Another
            </button>
            <a 
              href="/check-in"
              className="px-6 py-2 bg-[#05164d] text-white rounded hover:bg-[#0a2370]"
            >
              Go to Check-In
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
