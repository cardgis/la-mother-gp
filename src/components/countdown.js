"use client";
import React from "react";
import { useEffect, useState } from "react";

function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/05/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <>
        <h2 className="flex justify-center mb-4 ">
          Premier depart : <span>05 septembre 2024</span>
        </h2>
        <div>
          <div className="flex gap-4 outline">
            <div>
              <span className="time">{days}</span>
              <span className="label">Days</span>
            </div>
            <span className="divider">:</span>
            <div className="timer-segment">
              <span className="time">{hours}</span>
              <span className="label">Hours</span>
            </div>
            <span className="divider">:</span>
            <div className="timer-segment">
              <span className="time">{minutes}</span>
              <span className="label">Minutes</span>
            </div>
            <span className="divider">:</span>
            <div className="timer-segment">
              <span className="time">{seconds}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default Countdown;
