// so you have  to create ticket booking page in react which include 3 section
// vip 6*5 general 4*4 and economy 5*5  matrix and when i click on any
//  seat a button is there to confirm booking when i click on
// that button is should display alert message and display aa selected seat

import React, { useState } from "react";

function Question8() {
  const [sectionConfig, setSectionConfig] = useState([
    { name: "VIP", row: "6", col: "5" },
    { name: "General", row: "4", col: "5" },
    { name: "Economy", row: "5", col: "5" },
  ]);

  const [selectedSeat, setSelectedSeat] = useState([
    { name: "VIP", seat: [] },
    { name: "General", seat: [] },
    { name: "Economy", seat: [] },
  ]);

  const generateSeatNumber = (row, col) => {
    const seatNumber = parseInt(row, 10) * parseInt(col, 10);
    const seats = [];
    for (let i = 0; i < seatNumber; i++) {
      seats.push(i + 1);
    }
    return seats;
  };

  const Seats = ({ gridSize, col, section }) => {
    const handleSeatClick = (val) => {
      const temp = selectedSeat.map((data) => {
        if (data.name !== section) return data;
        const exists = data.seat.includes(val);
        return { ...data, seat: exists ? data.seat.filter((s) => s !== val) : [...data.seat, val] };
      });

      setSelectedSeat(temp);

      console.log("Data", temp);
    };

    const isSeatAvailable = (section, val) =>
      selectedSeat.some((data) => data.name === section && data.seat.includes(val));

    return (
      <div className={`grid grid-cols-${col} gap-2 mb-3`}>
        {gridSize.map((val, idx) => {
          return (
            <div
              key={idx}
              className={`border rounded-md px-4 py-1 cursor-pointer`}
              style={{ backgroundColor: isSeatAvailable(section, val) ? "#bbf7d0" : "#ffffff" }}
              onClick={() => handleSeatClick(val)}
            >
              {val}
            </div>
          );
        })}
      </div>
    );
  };

  const handleBooking = () => {
    alert("Seats Confirmed, here are the seats :");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Ticket Booking</h1>
          <p className="text-sm text-gray-500">Select seats from different sections and confirm your booking.</p>
        </header>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-white border" />
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-green-500" />
            <span className="text-sm text-gray-600">Selected</span>
          </div>
        </div>

        <div className="space-y-6">
          {sectionConfig.map((val, idx) => {
            const gridSize = generateSeatNumber(val.row, val.col);
            return (
              <section key={idx} className="p-4 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{val.name}</h3>
                  <span className="text-sm text-gray-500">
                    {val.row} x {val.col}
                  </span>
                </div>

                <Seats gridSize={gridSize} col={parseInt(val.col, 10)} section={val.name} />
              </section>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Selected seats:</div>
            <div className="mt-2 text-sm text-gray-800">
              {selectedSeat.flatMap((s) => s.seat.map((n) => `${s.name}-${n}`)).join(", ") || "None"}
            </div>
          </div>

          <button
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow hover:scale-[1.02] transition-transform"
            onClick={handleBooking}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question8;
