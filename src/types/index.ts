export interface Aircraft {
  id: string;
  name: string;
  image: string;
  capacity: number;
  rows: number;
  cols: number; // e.g., 6 for 3-3 configuration
  aisles: number[]; // column indices where aisles are located
}

export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  aircraftId: string;
  price: number;
}

export interface Booking {
  flightId: string;
  robloxUsername: string;
  discordUsername: string;
  seat: string;
  bookingReference: string;
}

export interface CheckIn {
  bookingReference: string;
  robloxUsername: string;
}
