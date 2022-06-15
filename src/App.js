import "./App.css";
import Doc from "./components/Docs";
import { app, database } from "./firebase/firebase_Config";
import { Routes, Route } from "react-router-dom";
import EditDocs from "./components/EditDocs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Doc database={database} />} />
      <Route path="/editDocs/:id" element={<EditDocs database={database} />} />
    </Routes>
  );
}

export default App;
