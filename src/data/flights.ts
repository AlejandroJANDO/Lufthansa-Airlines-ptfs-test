import { Flight } from '../types';

export const flights: Flight[] = [
  {
    id: 'lh-101',
    flightNumber: 'LH101',
    origin: 'Frankfurt (FRA)',
    destination: 'New York (JFK)',
    departureTime: '2025-12-15T10:00:00',
    arrivalTime: '2025-12-15T14:00:00',
    aircraftId: 'b747-8',
    price: 450
  },
  {
    id: 'lh-202',
    flightNumber: 'LH202',
    origin: 'Munich (MUC)',
    destination: 'London (LHR)',
    departureTime: '2025-12-16T08:30:00',
    arrivalTime: '2025-12-16T09:45:00',
    aircraftId: 'a320',
    price: 120
  },
  {
    id: 'lh-303',
    flightNumber: 'LH303',
    origin: 'Frankfurt (FRA)',
    destination: 'Tokyo (HND)',
    departureTime: '2025-12-17T13:00:00',
    arrivalTime: '2025-12-18T08:00:00',
    aircraftId: 'a380',
    price: 800
  },
  {
    id: 'lh-404',
    flightNumber: 'LH404',
    origin: 'Berlin (BER)',
    destination: 'Dubai (DXB)',
    departureTime: '2025-12-18T22:00:00',
    arrivalTime: '2025-12-19T06:30:00',
    aircraftId: 'b787',
    price: 550
  }
];
