import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Overview from "./Pages/Overview";
import Patient from './Pages/Patient';
import Calendar from './Pages/Calendar';
import Doctors from './Pages/Doctors';
import Messages from './Pages/Messages';

function App() {
  return (
    <Router>
      <div className="bg-black text-white font-sans">
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-lg font-bold">
              Home
            </Link>
            <div>
              <Link to="/patient" className="text-gray-400 hover:text-white mr-4">
                Patient
              </Link>
              <Link to="/calendar" className="text-gray-400 hover:text-white mr-4">
                Calendar
              </Link>
              <Link to="/doctors" className="text-gray-400 hover:text-white mr-4">
                Doctors
              </Link>
              <Link to="/messages" className="text-gray-400 hover:text-white">
                Messages
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/patient">
            <Patient />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/doctors">
            <Doctors />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/">
            <Overview />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
