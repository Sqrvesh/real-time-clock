import { Clock } from "../components/Clock";
import { Navbar } from "../components/Navbar";
import { AlarmModal } from "../components/AlarmModal";

export function ClockPage({ darkMode, toggleDarkMode, is24Hour, getTimeString}) {
  return(
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Clock is24Hour={is24Hour} getTimeString={getTimeString} />
    </div>
  );
}