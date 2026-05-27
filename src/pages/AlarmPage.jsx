import { Navbar } from "../components/Navbar";
import './AlarmPage.css';

export function AlarmPage({ darkMode, toggleDarkMode, alarms, setAlarms, isOn, setIsOn }) {

  function setAlarmValue(index, value) {
    let alarmsCopy = [...alarms];
    alarmsCopy[index] = value;
    setAlarms(alarmsCopy);
  }

  function setAlarmState(index, boolValue) {
    let isOnCopy = [...isOn];
    isOnCopy[index] = boolValue;
    setIsOn(isOnCopy);
  }

  function addAlarm() {
    setAlarms([...alarms, "00:00"]);
    setIsOn([...isOn, false]);
  }

  function deleteAlarm(index) {
    const newAlarms = alarms.toSpliced(index, 1);
    const newIsOn = isOn.toSpliced(index, 1);
    setAlarms(newAlarms);
    setIsOn(newIsOn);
  }

  return (
    <div className="app">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <button className="add-alarm" onClick={addAlarm}>Add Alarm</button>
      {
        alarms.map((alarm, index) => {
          return (
            <div className="alarm-container" key={index}>
              <button className="alarm-delete" onClick={() => {deleteAlarm(index)}}>X</button>
              <input className="alarm-input" value={alarm} onChange={(e) => { setAlarmValue(index, e.target.value) }} type="time" />
              <label className="switch">
                <input type="checkbox" checked={isOn[index]} onChange={(e) => { setAlarmState(index, e.target.checked) }} />
                <span className="slider" />
              </label>
            </div>
          );  
        })
      }
    </div>
  );
}