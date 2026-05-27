import './AlarmModal.css';

export function AlarmModal({ setAlarmRinging, alarmAudioRef, is24Hour}) {
  
  function closeAlarmModal() {
    setAlarmRinging(false);
    alarmAudioRef.current.pause();
    alarmAudioRef.current.currentTime = 0;
  }

  function getAlarmTime(is24Hour) {
    return ((new Date()).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: !is24Hour
    }));
  }

  return(
    <div className="modal-container">
      <div className="modal">
        <div className="modal-row">
          <div>Alarm</div>
          <div className="modal-close" onClick={closeAlarmModal}>X</div>
        </div>
        <div>Its {getAlarmTime(is24Hour)}!</div>
      </div>
    </div>
  )
}