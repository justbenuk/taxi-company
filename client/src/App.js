import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* 
imported pages
*/
import Register from "./Routes/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
