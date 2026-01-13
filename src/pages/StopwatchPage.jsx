import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Stopwatch } from "../components/Stopwatch";

export function StopwatchPage({ darkMode, toggleDarkMode }) {
  return (
    <div className="app">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Stopwatch darkMode={darkMode} />
    </div>
  );
}