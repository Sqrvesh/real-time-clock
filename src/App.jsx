import { useState } from 'react';
import { ClockPage } from './pages/clockPage';
import { SettingsPage } from './pages/SettingsPage';
import { Routes, Route } from 'react-router';
import { AlarmPage } from './pages/AlarmPage';
import { StopwatchPage } from './pages/StopwatchPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [settings, setSettings] = useState({
    is24Hour: false
  });

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function changeSettings(id, boolValue) {
    let newSettings = {...settings};
    newSettings[id] = boolValue;
    setSettings(newSettings);
  }

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Routes>
        <Route index element={<ClockPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} is24hour={settings.is24Hour} />} />
        <Route path={"/settings"} element={<SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} settings={settings} changeSettings={changeSettings} />} />
        <Route path={"/alarm"} element={<AlarmPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path={"/stopwatch"} element={<StopwatchPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
