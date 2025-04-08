import React from "react";

const MapTest = () => {
  const fruits = ["사과", "바나나", "오렌지"];

  return (
    <div>
      <h2>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </h2>
    </div>
  );
};

export default MapTest;
