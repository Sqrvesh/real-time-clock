import { Clock } from "../components/Clock";
import { Navbar } from "../components/Navbar";

export function ClockPage({ darkMode, toggleDarkMode}) {
  return(
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Clock />
    </div>
  );
}