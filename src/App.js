import React from "react";
import Content from "./components/home/content";
import Content2 from "./components/home/content2";
import Navbar from "./components/home/navbar";

function App() {
  return (
    <div className="w-full flex flex-col bg-[#F2CEDA]">
<Navbar/>
<Content/>
<Content2/>
    </div>
  );
}

export default App;
