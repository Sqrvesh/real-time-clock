import { useEffect, useRef, useState } from "react";
import playIconLight from '../assets/play_light.png';
import resetIconLight from '../assets/reset_light.png';
import pauseIconLight from '../assets/pause_light.png';
import playIconDark from '../assets/play_dark.png';
import resetIconDark from '../assets/reset_dark.png';
import pauseIconDark from '../assets/pause_dark.png';
import './Clock.css';
import './Stopwatch.css';

export function Stopwatch({ darkMode }) {

  const timeRef = useRef(0);
  const intervalRef = useRef(null);
  const startCounterRef = useRef();
  const stopCounterRef = useRef();

  startCounterRef.current = startCounter;
  stopCounterRef.current = stopCounter;

  const [timeString, setTimeString] = useState("00:00:00:00");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    function processKeyDown(event) {
      if (event.code === 'Space') {
        if (isRunning) {
          stopCounterRef.current();
        } else {
          startCounterRef.current();
        }
      }
    }

    window.addEventListener('keydown', processKeyDown);

    return () => { window.removeEventListener('keydown', processKeyDown); }
  }, [isRunning]);



  function formatTimeString(time) {
    const hours = Math.floor(time / (100 * 60 * 60));
    const minutes = Math.floor(time / (100 * 60)) % 60;
    const seconds = Math.floor(time / 100) % 60;
    const centiSeconds = time % 100;

    return `${hours < 10 ? "0" + hours.toString() : hours}:${minutes < 10 ? "0" + minutes.toString() : minutes}:${seconds < 10 ? "0" + seconds.toString() : seconds}:${centiSeconds < 10 ? "0" + centiSeconds.toString() : centiSeconds}`;
  }

  function startCounter() {
    if (!intervalRef.current) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        timeRef.current += 1;
        setTimeString(formatTimeString(timeRef.current));
      }, 10)
    }
  }

  function stopCounter() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  function resetCounter() {
    if (!intervalRef.current) {
      timeRef.current = 0;
      setTimeString("00:00:00:00");
    }
  }

  return (
    <div className="clock-container">
      <div className="clock">{timeString}</div>
      <div className="stopwatch-button-container">
        <button onClick={isRunning ? stopCounter : startCounter} className="stopwatch-button">
          <div className="stopwatch-button-icon">
            <img src={darkMode ? (isRunning ? pauseIconDark : playIconDark) : (isRunning ? pauseIconLight : playIconLight)} />
          </div>
          <div className="stopwatch-button-text">{isRunning ? 'Stop' : 'Start'}</div>
        </button>
        <button onClick={resetCounter} className="stopwatch-button">
          <div className="stopwatch-button-icon">
            <img src={darkMode ? resetIconDark : resetIconLight} />
          </div>
          <div className="stopwatch-button-text">Reset</div>
        </button>
      </div>
    </div>
  );
}