import React, { useState } from 'react'

const Index = () => {

  const [typeOfColor, settypeOfColor] = useState("hex")
  const [color, setColor] = useState('#000000')

  const handleRandomHexColor = () => {
    settypeOfColor("hex")
    let a =  "#" + Math.floor(Math.random() * 16777215) ;
    let rc = a.toString(16)
    setColor(rc)

  }

  const handleRandomRgbColor = () => {
    settypeOfColor("rgb")
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    const hexColor = `rgb(${r},${g},${b})`;
    
    setColor(hexColor);
  };
  

  return (
<div className="container w-[100vw] h-[100vh] " style={{ backgroundColor: color }}>
    <button onClick={handleRandomHexColor} className="btn bg-white text-black p-4 m-2 hover:bg-slate-500">Generate Random Color</button>
    <button onClick={handleRandomHexColor} className="btn bg-white text-black p-4 m-2 hover:bg-slate-500">Generate hex Color</button>
    <button onClick={handleRandomRgbColor} className="btn bg-white text-black p-4 m-2 hover:bg-slate-500">Generate Rgb Color</button>
     <h1>{typeOfColor === "hex" ?"hex" : "rgb"} </h1>
    <h3>{color}</h3>
</div>  
     

  )
}

export default Index
