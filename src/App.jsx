import { Clock } from './components/clock';
import { Navbar } from './components/Navbar';
import './App.css';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Clock />
    </div>
  );
}

export default App;
