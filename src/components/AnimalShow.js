import "../styles/AnimalShow.css";
import { useState } from "react";
import cat from "../images/cat.svg";
import cow from "../images/cow.svg";
import bird from "../images/bird.svg";
import dog from "../images/dog.svg";
import gator from "../images/gator.svg";
import heart from "../images/heart.svg";
import horse from "../images/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal_show" onClick={handleClick}>
      <img className="animal_img" alt="animal" src={svgMap[type]} />
      <img alt="heart" src={heart} style={{ width: 10 + 10 * clicks + "px" }} />
    </div>
  );
}

export default AnimalShow;
