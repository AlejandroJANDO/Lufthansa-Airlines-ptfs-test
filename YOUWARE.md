# Lufthansa PTFS Website

This is a React application for the Lufthansa Airlines in the Roblox game PTFS (Pilot Training Flight Simulator).

## Features

- **Home Page**: Landing page with quick links.
- **Booking System**: 
  - View available flights.
  - Select flights and seats.
  - Enter Roblox and Discord usernames.
  - Sends booking details to a Discord Webhook.
- **Check-In System**:
  - Enter Booking Reference and Roblox Username.
  - Sends check-in confirmation to a Discord Webhook.
- **Fleet Showcase**: View the airline's aircraft with details.

## How to Manage Data

### Adding/Editing Flights
Edit `src/data/flights.ts`.
Add a new object to the `flights` array:
```typescript
{
  id: 'unique-id',
  flightNumber: 'LH123',
  origin: 'Origin Airport',
  destination: 'Destination Airport',
  departureTime: 'YYYY-MM-DDTHH:MM:SS', // ISO format
  arrivalTime: 'YYYY-MM-DDTHH:MM:SS',
  aircraftId: 'b747-8', // Must match an ID in fleet.ts
  price: 100
}
```

### Adding/Editing Fleet
Edit `src/data/fleet.ts`.
You can configure the seat map by changing `rows`, `cols`, and `aisles`.

## Development

### Commands
- `npm install`: Install dependencies.
- `npm run dev`: Start development server.
- `npm run build`: Build for production.

### Project Structure
- `src/data/`: Contains static data for flights and fleet.
- `src/services/`: Contains Discord webhook logic.
- `src/components/`: Reusable UI components (SeatMap, Navbar, etc.).
- `src/pages/`: Main page components.

## Deployment
This project is built with Vite. The output is in the `dist/` folder.
You can host this on Vercel, Netlify, or GitHub Pages.

## Note on Webhooks
Discord Webhooks are called directly from the browser. This usually works, but if Discord changes their CORS policy, you might need a proxy server.
