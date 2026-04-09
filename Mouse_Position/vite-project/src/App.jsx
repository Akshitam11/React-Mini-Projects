import React, { useEffect, useState } from 'react'

function App() {

  let [position, setPosition] = useState({
    x:0,
    y:0
  });

  useEffect(() => {
    let handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

     }, []);
  return (
    <div>
      <h2>Mouse Position Tracker</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  )
}

export default App
