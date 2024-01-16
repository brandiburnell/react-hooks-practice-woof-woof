import React from "react";

function DogContainer({ selectedDog, onGoodDogClick }) {

  function handleClick() {
    fetch(`http://localhost:3001/pups/${selectedDog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !selectedDog.isGoodDog,
      }),
    })
      .then((r) => r.json())
      .then(updatedDog => onGoodDogClick(updatedDog));
  }

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={selectedDog.image} alt={selectedDog.name}></img>
        <h2>{selectedDog.name}</h2>
        <button onClick={handleClick}>{selectedDog.isGoodDog? "Good Dog!" : "Bad Dog!"}</button>
      </div>
    </div>
  );
}

export default DogContainer;