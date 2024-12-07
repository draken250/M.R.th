import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./Pages/Overview";
import Patient_chart from "./Pages/Patient_chart";
import Patient_chart from "./Pages/Calendar";
import Patient_chart from "./Pages/Sport";
import Patient_chart from "./Pages/Diet";

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Overview />}/> 
      <Route path="/Patient_chart" element={<Patient_chart />}/> 
      <Route path="/Calendar" element={<Calendar />}/> 
      <Route path="/Sport" element={<Sport />}/> 
      <Route path="/Diet" element={<Diet />}/> 
      </Routes>
    </HashRouter>
  );
}

export default App;
