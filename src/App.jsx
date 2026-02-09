import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Header2 from "./components/Header2";

function App() {
  return (
    <div className="relative min-h-screen bg-[#181111] text-white">
   
      <div className="crt-overlay " />
    
      <Header2 />
      <main className="relative z-10 ">
        <Outlet />
      </main >
      <Footer />
    </div>
  );
}

export default App;
