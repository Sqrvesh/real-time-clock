import './Navbar.css';
import settingsIcon from '../assets/settings.png';
import darkModeIcon from '../assets/dark_mode.png';  

export function Navbar() {
  return(
    <div className="navbar">
      <div className="title">Real time clock</div>
      <div className="nav-button nav-selected">Clock</div>
      <div className="nav-button">Alarm</div>
      <div className="nav-icon-container">
        <img src={darkModeIcon} className="nav-icon"/>
      </div>
      <div className="nav-icon-container">
        <img src={settingsIcon} className="nav-icon"/>
      </div>
    </div>
  );
}