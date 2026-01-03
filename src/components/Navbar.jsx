import './Navbar.css';
import settingsLightIcon from '../assets/settings_light.png';
import settingsDarkIcon from '../assets/settings_dark.png';
import darkModeIcon from '../assets/dark_mode.png';
import lightModeIcon from '../assets/light_mode.png';

export function Navbar({ toggleDarkMode, darkMode }) {
  return(
    <div className="navbar">
      <div className="title">Real time clock</div>
      <div className="nav-button nav-selected">Clock</div>
      <div className="nav-button">Alarm</div>
      <div className="nav-icon-container" onClick={toggleDarkMode}>
        <img src={ darkMode ? lightModeIcon : darkModeIcon } className="nav-icon"/>
      </div>
      <div className="nav-icon-container">
        <img src={ darkMode ? settingsDarkIcon: settingsLightIcon } className="nav-icon"/>
      </div>
    </div>
  );
}