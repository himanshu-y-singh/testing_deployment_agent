import { useState } from 'react';

export default function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Flight booked from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="container">
      <form className="booking-box" onSubmit={handleBooking}>
        <h1>Flight Ticket Booking</h1>

        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
}
