import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./Pages/Overview";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Overview />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
