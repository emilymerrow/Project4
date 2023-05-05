import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import ChoreList from "./components/chores/ChoreList";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Chores</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chore" element={<ChoreList />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
