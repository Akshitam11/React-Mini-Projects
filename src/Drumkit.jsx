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
  const [pressed, setPressed] = useState("");

  const playSound = (key) => {
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
    const handleKeyPress = (event) => {
      playSound(event.key);
    };

    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <div className="drumkit-project">
      <h1 className="drumkit-title">The Drum Kit</h1>

      <div className="drumkit-keys">
        <button
          className={`drumkit-key drumkit-w ${pressed === "w" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("w")}
        >
          w
        </button>
        <button
          className={`drumkit-key drumkit-a ${pressed === "a" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("a")}
        >
          a
        </button>
        <button
          className={`drumkit-key drumkit-s ${pressed === "s" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("s")}
        >
          s
        </button>
        <button
          className={`drumkit-key drumkit-d ${pressed === "d" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("d")}
        >
          d
        </button>
        <button
          className={`drumkit-key drumkit-j ${pressed === "j" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("j")}
        >
          j
        </button>
        <button
          className={`drumkit-key drumkit-k ${pressed === "k" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("k")}
        >
          k
        </button>
        <button
          className={`drumkit-key drumkit-l ${pressed === "l" ? "drumkit-pressed" : ""}`}
          onClick={() => playSound("l")}
        >
          l
        </button>
      </div>
    </div>
  );
}

export default DrumKit;
