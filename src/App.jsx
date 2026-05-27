import { useEffect, useRef, useState } from 'react';
import { ClockPage } from './pages/ClockPage';
import { SettingsPage } from './pages/SettingsPage';
import { Routes, Route } from 'react-router';
import { AlarmPage } from './pages/AlarmPage';
import { StopwatchPage } from './pages/StopwatchPage';
import alarmAudio from './assets/alarm.mp3';
import './App.css';
import { AlarmModal } from './components/AlarmModal';

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

  function getTimeString(is24hour) {
    return ((new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24hour
    }));
  }

  function getTimeStringAlarm() {
    return ((new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }));
  }

  const [alarms, setAlarms] = useState(["00:00"]);
  const [isOn, setIsOn] = useState([false]);

  const [alarmRinging, setAlarmRinging] = useState(false);
  const alarmAudioRef = useRef(new Audio(alarmAudio));
  
  useEffect(() => {
    const timer = setInterval(() => {
      const currTime = getTimeStringAlarm();
      for (let i = 0; i < alarms.length; i++) {
        if (alarms[i] === currTime && isOn[i]) {
          setAlarmRinging(true);
          let isOnCopy = [...isOn];
          isOnCopy[i] = false;
          setIsOn(isOnCopy);
          alarmAudioRef.current.play();
          alarmAudioRef.current.loop = true;
        }
      }
    }, 10000)

    return (() => { clearInterval(timer) });
  }, [alarms, isOn])

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      {alarmRinging && <AlarmModal setAlarmRinging={setAlarmRinging} alarmAudioRef={alarmAudioRef} is24Hour={settings.is24Hour} />}
      <Routes>
        <Route index element={<ClockPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} is24Hour={settings.is24Hour} getTimeString={getTimeString}/>} />
        <Route path={"/settings"} element={<SettingsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} settings={settings} changeSettings={changeSettings} />} />
        <Route path={"/alarm"} element={<AlarmPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} alarms={alarms} setAlarms={setAlarms} isOn={isOn} setIsOn={setIsOn} />} />
        <Route path={"/stopwatch"} element={<StopwatchPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </div>
  );
}

export default App;
