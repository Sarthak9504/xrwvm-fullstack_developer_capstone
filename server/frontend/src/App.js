import LoginPanel from "./components/Login/Login"
import RegsitrationPanel from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegsitrationPanel />} />
    </Routes>
  );
}
export default App;
