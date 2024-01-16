import React from "react";

function DogBar({ dogs, onDogClick }) {

  const dogNames = dogs.map(dog => {
    return <span onClick={() => onDogClick(dog.id)} key={dog.id}>{dog.name}</span>
  });

  return (
		<div id="dog-bar">
			{dogNames}
		</div>
  );
}

export default DogBar;