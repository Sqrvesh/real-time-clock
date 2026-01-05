import { Link } from "react-router";
import { Navbar } from "../components/Navbar";

export function StopwatchPage({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Link to={"/"}>GO TO HOME</Link>
    </div>
  );
}