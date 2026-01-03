import { Clock } from './components/clock';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Clock />
    </div>
  );
}

export default App;
