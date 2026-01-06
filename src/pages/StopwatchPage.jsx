import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import { Stopwatch } from "../components/Stopwatch";

export function StopwatchPage({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Link to={"/"}>GO TO HOME</Link>
      <Stopwatch />
    </div>
  );
}