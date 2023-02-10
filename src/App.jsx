import Sidebar from "./layout/Sidebar";
import Home from "./pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./layout/Topbar";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import Chamber from "./pages/Chambers/Chamber";
import Treasury from "./pages/Treasury/Treasury";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="app min-h-screen grid w-full grid-cols-2 grid-rows-[auto__1fr__1fr] md:grid-cols-[280px__1fr__1fr]">
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      <Topbar setSidebar={setSidebar} />
      <div className="main-grid w-full pb-5 flex justify-start flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chambers" element={<Chamber />} />
          <Route path="/treasury" element={<Treasury />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
