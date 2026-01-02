import { useEffect, useState } from "react";
import './clock.css'

export function Clock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const dateObj = new Date();
      setTime(dateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }));
    }, 1000)

    return (() => { clearInterval(timer) });
  }, [])

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          {time}
        </div>
      </div>
    </>
  );
} 