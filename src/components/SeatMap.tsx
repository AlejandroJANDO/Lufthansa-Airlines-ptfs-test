import React from 'react';
import { Aircraft } from '../types';
import clsx from 'clsx';

interface SeatMapProps {
  aircraft: Aircraft;
  selectedSeat: string | null;
  onSelectSeat: (seat: string) => void;
  occupiedSeats?: string[]; // For future use
}

const SeatMap: React.FC<SeatMapProps> = ({ aircraft, selectedSeat, onSelectSeat, occupiedSeats = [] }) => {
  const { rows, cols, aisles } = aircraft;
  const letters = 'ABCDEFGHJK'.split('').slice(0, cols);

  const renderRow = (rowIndex: number) => {
    const rowSeats = [];
    let colCounter = 0;

    for (let i = 0; i < cols + aisles.length; i++) {
      // Check if this column is an aisle
      // We need to map the visual column index to the actual seat letter index
      // This logic is a bit tricky. Let's simplify:
      // We iterate through the letters. If we hit an aisle index (relative to letters), we add a spacer.
    }

    // Simpler approach:
    // Iterate through letters.
    // If the current letter index matches an aisle index, push a spacer div first.
    
    const seatElements = [];
    
    letters.forEach((letter, index) => {
      if (aisles.includes(index)) {
        seatElements.push(
          <div key={`aisle-${rowIndex}-${index}`} className="w-8 h-8 flex-shrink-0" />
        );
      }

      const seatId = `${rowIndex + 1}${letter}`;
      const isSelected = selectedSeat === seatId;
      const isOccupied = occupiedSeats.includes(seatId);

      seatElements.push(
        <button
          key={seatId}
          disabled={isOccupied}
          onClick={() => onSelectSeat(seatId)}
          className={clsx(
            "w-8 h-8 rounded-t-lg text-xs font-bold flex items-center justify-center transition-colors border",
            isOccupied ? "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300" :
            isSelected ? "bg-[#ffb81c] text-[#05164d] border-[#ffb81c]" :
            "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300"
          )}
        >
          {letter}
        </button>
      );
    });

    return (
      <div key={rowIndex} className="flex items-center justify-center space-x-2 mb-2">
        <div className="w-6 text-xs text-gray-400 text-right mr-2">{rowIndex + 1}</div>
        {seatElements}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200 overflow-x-auto">
      <div className="flex flex-col items-center min-w-max">
        <div className="w-full max-w-md bg-gray-100 rounded-t-full h-24 mb-8 border-4 border-gray-200 relative overflow-hidden">
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-400 font-mono text-sm">COCKPIT</div>
        </div>
        
        <div className="space-y-1">
          {Array.from({ length: rows }).map((_, i) => renderRow(i))}
        </div>

        <div className="mt-8 flex space-x-6 text-sm">
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white border border-gray-300 rounded-t-sm"></div>
                <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#ffb81c] border border-[#ffb81c] rounded-t-sm"></div>
                <span>Selected</span>
            </div>
            <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 border border-gray-300 rounded-t-sm"></div>
                <span>Occupied</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
