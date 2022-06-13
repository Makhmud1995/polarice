import React from "react";
import Content from "./components/home/content";
import Content2 from "./components/home/content2";
import Content3 from "./components/home/content3";
import Navbar from "./components/home/navbar";

function App() {
  return (
    <div className="w-full flex flex-col bg-[#F2CEDA]">
<Navbar/>
<Content/>
<Content2/>
<Content3/>
    </div>
  );
}

export default App;
