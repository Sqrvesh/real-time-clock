import { useState } from 'react';
import { ClockPage } from './pages/clockPage';
import './App.css';
import { SettingsPage } from './pages/SettingsPage';
import { Routes, Route } from 'react-router';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Routes>
        <Route index element={<ClockPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path={"/settings"} element={<SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
