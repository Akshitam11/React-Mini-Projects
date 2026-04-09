import React, { useEffect, useState } from 'react'

function App() {

  let [windowsize, setWindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    let Resize = () => {
      setWindowsize({
        width: window.innerWidth,
        height: window.innerHeight

      });
    };

    window.addEventListener("resize", Resize);

  }, []);
  return (
    <div>
      <p>Width : {windowsize.width}px</p>
      <p>Height: {windowsize.height}px</p>

    </div>
  )
}

export default App


