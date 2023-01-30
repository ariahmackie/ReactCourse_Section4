import "./styles.css";
import AnimalShow from "./components/AnimalShow";
import { useState } from "react";

/* Concepts used:
  useState
  components
  props
  getting a random item from a list
  click event handler to append a random animal string to a list
  using mapping to print a jsx AnimalShow element for every animal append to list
  click event handler
  mapping a word to an image 
  changing an image size after click event
*/

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal_container">{renderedAnimals}</div>
    </div>
  );
}
