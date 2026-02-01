import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import './SettingsPage.css';

export function SettingsPage({ darkMode, toggleDarkMode, settings, changeSettings}) {
  
  function handleCheckbox(event) {
    changeSettings(event.target.id, event.target.checked);
  }
  
  return (
    <div className="app">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
  
      <div className="settings-list">

        <div className="settings-container">
          <label className="switch">
            <input type="checkbox" id="is24Hour" onChange={handleCheckbox} checked={settings.is24Hour} />
            <span className="slider" />
          </label>
          <div className="settings-text">24 Hour format</div>
        </div>

        <div className="settings-container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
          </label>
          <div className="settings-text">Placeholder</div>
        </div>

      </div>
    </div>
  );
}