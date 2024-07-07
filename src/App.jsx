import { useState } from "react";


function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <>
      <div style={{backgroundColor: color}} className="w-full h-screen duration-200">
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl justify-around">
            
            <button onClick={()=>setColor("red")} className="outline-none px-4 rounded-3xl shadow-lg" style={{backgroundColor:"red"}}>RED</button>

            <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-3xl shadow-lg" style={{backgroundColor:"green"}}>GREEN</button>

            <button onClick={()=>setColor("cyan")} className="outline-none px-4 rounded-3xl shadow-lg" style={{backgroundColor:"cyan"}}>cyan</button>

            <button onClick={()=>setColor("yellow")} className="outline-none px-4 rounded-3xl shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>

            <button onClick={()=>setColor("purple")} className="outline-none px-4 rounded-3xl shadow-lg" style={{backgroundColor:"purple"}}>purple</button>

            <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-3xl shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
