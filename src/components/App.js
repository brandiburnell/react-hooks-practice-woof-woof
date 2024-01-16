import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogContainer from "./DogContainer";

function App() {
  const [dogs, setDogs] = useState([]);
  const [clickedDog, setClickedDog] = useState({});

  // fetch dog names upon render
  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then(dogs => setDogs(dogs));
  }, []);

  function handleDogClick(dogId) {
    const doggo = dogs.find(dog => {
      return dog.id === dogId;
    });
    setClickedDog(doggo);
  }

  function handleGoodDogButtonClick(updatedDog) {
    const updatedDogs = dogs.map(dog => {
      if (dog.id === updatedDog.id) {
        return updatedDog;
      }
      else {
        return dog;
      }
    });
    setDogs(updatedDogs);
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <DogBar onDogClick={handleDogClick} dogs={dogs}/>
      <DogContainer onGoodDogClick={handleGoodDogButtonClick} selectedDog={clickedDog} />
    </div>
  );
}

export default App;
