import React from 'react';

export const Header = (props) => {
  const styling = {
    div: {
      padding: "10px",
      backgroundColor: "MediumSeaGreen",
      color: "white",
      margin: "-10px",
      fontFamily: "sans-serif",
      textAlign: "center",
    }
  }

  return(
    <div style={styling.div}>
      <h3>{props.name}</h3>
    </div>
  );
}