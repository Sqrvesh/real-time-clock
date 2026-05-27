import { Navbar } from "../components/Navbar";
import './AlarmPage.css';

export function AlarmPage({ darkMode, toggleDarkMode, alarm, setAlarm, isOn, setIsOn }) {

  return (
    <div className="app">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <div className="alarm-container">
        <input className="alarm-input" value={alarm} onChange={(e) => {setAlarm(e.target.value)}} type="time" />
        <label className="switch">
          <input type="checkbox" checked={isOn} onChange={(e) => {setIsOn(e.target.checked)}}/> 
          <span className="slider" />
        </label>
      </div>
    </div>
  );
}