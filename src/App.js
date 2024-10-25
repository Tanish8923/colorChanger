import React, { useState } from 'react';

function App() {
  // State to hold the current background color
  const [bgColor, setBgColor] = useState('white');

  // Function to handle the color change
  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center bg-${bgColor}`}>
      <h1 className="text-2xl mb-4">Color Changer App</h1>
      
      <div className="space-x-4">
        {/* Buttons for changing color */}
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => changeColor('red-500')}
        >
          Red
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => changeColor('blue-500')}
        >
          Blue
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => changeColor('green-500')}
        >
          Green
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded"
          onClick={() => changeColor('yellow-500')}
        >
          Yellow
        </button>
      </div>
    </div>
  );
}

export default App;
