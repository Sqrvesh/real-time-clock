import { Clock } from "../components/Clock";
import { Navbar } from "../components/Navbar";

export function ClockPage({ darkMode, toggleDarkMode, is24hour }) {
  return(
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Clock is24hour={is24hour} />
    </div>
  );
}