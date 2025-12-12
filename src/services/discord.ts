import { Booking, CheckIn, Flight } from '../types';

const BOOKING_WEBHOOK_URL = 'https://discord.com/api/webhooks/1402067274210476103/6xohNwUMetMxxujm8Czbat1yulYZpyvSoD3BLgllIlnkEnLRAYFq_GGiDoR7KtxN_1WW';
const CHECKIN_WEBHOOK_URL = 'https://discord.com/api/webhooks/1405710261758857226/PM5ctK1DkWTuFxjAFkAw3q5j2zMWP6Xp-929jPm9d8TwB5Ml5u3SVmAmpT1nedFuK2Kp';

export const sendBookingToDiscord = async (booking: Booking, flight: Flight) => {
  const embed = {
    title: '✈️ New Flight Booking',
    color: 0xFFB81C, // Lufthansa Yellow
    fields: [
      { name: 'Flight Number', value: flight.flightNumber, inline: true },
      { name: 'Route', value: `${flight.origin} ➝ ${flight.destination}`, inline: true },
      { name: 'Date', value: new Date(flight.departureTime).toLocaleDateString(), inline: true },
      { name: 'Roblox User', value: booking.robloxUsername, inline: true },
      { name: 'Discord User', value: booking.discordUsername, inline: true },
      { name: 'Seat', value: booking.seat, inline: true },
      { name: 'Booking Ref', value: `\`${booking.bookingReference}\``, inline: false },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Lufthansa Airlines PTFS'
    }
  };

  try {
    await fetch(BOOKING_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ embeds: [embed] }),
    });
    return true;
  } catch (error) {
    console.error('Error sending booking webhook:', error);
    return false;
  }
};

export const sendCheckInToDiscord = async (checkIn: CheckIn) => {
  const embed = {
    title: '✅ Passenger Check-In',
    color: 0x000080, // Navy Blue
    fields: [
      { name: 'Booking Reference', value: `\`${checkIn.bookingReference}\``, inline: true },
      { name: 'Roblox User', value: checkIn.robloxUsername, inline: true },
      { name: 'Status', value: 'Checked In', inline: true },
    ],
    timestamp: new Date().toISOString(),
    footer: {
      text: 'Lufthansa Airlines PTFS'
    }
  };

  try {
    await fetch(CHECKIN_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ embeds: [embed] }),
    });
    return true;
  } catch (error) {
    console.error('Error sending check-in webhook:', error);
    return false;
  }
};
