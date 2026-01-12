import { useRef, useState } from "react";
import './Clock.css';
import './Stopwatch.css';

export function Stopwatch() {

  function formatTimeString(time) {
    const hours = Math.floor(time / (100 * 60 * 60));
    const minutes = Math.floor(time / (100 * 60)) % 60;
    const seconds = Math.floor(time / 100) % 60;
    const centiSeconds = time % 100;

    return `${hours < 10 ? "0" + hours.toString() : hours}:${minutes < 10 ? "0" + minutes.toString() : minutes}:${seconds < 10 ? "0" + seconds.toString() : seconds}:${centiSeconds < 10 ? "0" + centiSeconds.toString() : centiSeconds}`;
  }

  const [timeString, setTimeString] = useState("00:00:00:00");

  const timeRef = useRef(0);
  const intervalRef = useRef(null);

  function startCounter() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        timeRef.current += 1;
        setTimeString(formatTimeString(timeRef.current));
      }, 10) 
    }
  }

  function stopCounter() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetCounter() {
    timeRef.current = 0;
    setTimeString("00:00:00:00");
  }

  return (
    <div className="clock-container">
      <div className="clock">{timeString}</div>
      <div>
        <button onClick={startCounter} className="stopwatch-button">Start</button>
        <button onClick={stopCounter} className="stopwatch-button">Stop</button>
        <button onClick={resetCounter} className="stopwatch-button">Reset</button>
      </div>
    </div>
  );
}