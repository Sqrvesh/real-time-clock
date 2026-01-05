import { useState } from 'react';
import { ClockPage } from './pages/clockPage';
import { SettingsPage } from './pages/SettingsPage';
import { Routes, Route } from 'react-router';
import { AlarmPage } from './pages/AlarmPage';
import { StopwatchPage } from './pages/StopwatchPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [is24hour, set24hour] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleClockFormat() {
    set24hour(!is24hour);
  }

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Routes>
        <Route index element={<ClockPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} is24hour={is24hour} />} />
        <Route path={"/settings"} element={<SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleClockFormat={toggleClockFormat} />} />
        <Route path={"/alarm"} element={<AlarmPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path={"/stopwatch"} element={<StopwatchPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
