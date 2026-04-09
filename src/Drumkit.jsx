import { useEffect, useState } from "react";
import "./Drumkit.css";

import tom1 from "./assets/sounds/tom-1.mp3";
import tom2 from "./assets/sounds/tom-2.mp3";
import tom3 from "./assets/sounds/tom-3.mp3";
import tom4 from "./assets/sounds/tom-4.mp3";
import snare from "./assets/sounds/snare.mp3";
import crash from "./assets/sounds/crash.mp3";
import kick from "./assets/sounds/kick-bass.mp3";

function DrumKit() {

  let [pressed, setPressed] = useState("");

  let playSound = (key) => {

    let sound;

    switch (key) {
      case "w":
        sound = new Audio(tom1);
        break;
      case "a":
        sound = new Audio(tom2);
        break;
      case "s":
        sound = new Audio(tom3);
        break;
      case "d":
        sound = new Audio(tom4);
        break;
      case "j":
        sound = new Audio(snare);
        break;
      case "k":
        sound = new Audio(crash);
        break;
      case "l":
        sound = new Audio(kick);
        break;
      default:
        return;
    }

    sound.play();

    setPressed(key);

    setTimeout(() => {
      setPressed("");
    }, 100);
  };

  useEffect(() => {

    let handleKeyPress = (event) => {
      playSound(event.key);
    };

    document.addEventListener("keypress", handleKeyPress);



  }, []);

  const keys = ["w", "a", "s", "d", "j", "k", "l"];

  return (
    <div className="container">
      <h1>The Drum Kit</h1>

      <div className="drum">

        <button className={`key w ${pressed == "w" ? "pressed" : ""}`} onClick={() => playSound("w")}> w </button>
        <button className={`key a ${pressed == "a" ? "pressed" : ""}`} onClick={() => playSound("a")}> a </button>
        <button className={`key s ${pressed == "s" ? "pressed" : ""}`} onClick={() => playSound("s")}> s </button>
        <button className={`key d ${pressed == "d" ? "pressed" : ""}`} onClick={() => playSound("d")}> d </button>
        <button className={`key j ${pressed == "j" ? "pressed" : ""}`} onClick={() => playSound("j")}> j </button>
        <button className={`key k ${pressed == "k" ? "pressed" : ""}`} onClick={() => playSound("k")}> k </button>
        <button className={`key l ${pressed == "l" ? "pressed" : ""}`} onClick={() => playSound("l")}> l </button>
        
      </div>
    </div>
  );
}

export default DrumKit;