import "remixicon/fonts/remixicon.css";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { Route, Routes } from "react-router-dom";
import Settings from "./Components/Settings";

function App() {
  return (
    <div className="w-full h-screen flex items-start">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
