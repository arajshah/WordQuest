// Letter grid for a WordQuest board.
// Renders each letter in a fixed-size cell, one row per board row.

import React from 'react';

function Board({ board }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${board.length}, 50px)` }}>
      {board.flat().map((letter, i) => (
        <div key={i} style={{ border: '1px solid #000', width: '50px', height: '50px', display:'flex', alignItems:'center', justifyContent:'center' }}>
          {letter}
        </div>
      ))}
    </div>
  );
}

export default Board;
