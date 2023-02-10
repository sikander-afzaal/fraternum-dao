import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Topbar from "./layout/Topbar";
import { useState } from "react";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="app min-h-screen grid w-full grid-cols-2 grid-rows-[auto__1fr__1fr] md:grid-cols-[280px__1fr__1fr]">
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Topbar setSidebar={setSidebar} />
      <div className="main-grid w-full pb-5">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
