import './Navbar.css';
import settingsLightIcon from '../assets/settings_light.png';
import settingsDarkIcon from '../assets/settings_dark.png';
import darkModeIcon from '../assets/dark_mode.png';
import lightModeIcon from '../assets/light_mode.png';
import { Link, NavLink } from 'react-router';

export function Navbar({ toggleDarkMode, darkMode }) {
  return(
    <div className="navbar">
      <div className="title">Real time clock</div>
      
      <NavLink to={"/"} className="nav-button">Clock</NavLink>
      <NavLink to={"/alarm"} className="nav-button">Alarm</NavLink>
      <NavLink to={"/stopwatch"} className="nav-button">Stopwatch</NavLink>
      
      <div className="nav-icon-container" onClick={toggleDarkMode}>
        <img src={ darkMode ? lightModeIcon : darkModeIcon } className="nav-icon"/>
      </div>
      <Link className="nav-icon-container" to={"/settings"}>
        <img src={ darkMode ? settingsDarkIcon: settingsLightIcon } className="nav-icon"/>
      </Link>
    </div>
  );
}