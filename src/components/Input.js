import React from 'react';

export const Input = (props) => {
  const inputStyle = {
    div: {
      position: "fixed",
      bottom: 0,
      fontFamily: "sans-serif",
      backgroundColor: "MediumSeaGreen",
      width: "100%",
      padding: "10px",
      marginLeft: "-8px"
    },
    input: {
      padding: "10px",
      margin: "5px",
      width: "65%"
    },
    button: {
      padding: "10px",
      borderWidth: "0px"
    }
  };

  return(
    <div style={inputStyle.div}>
      <input style={inputStyle.input} type="text" placeholder="Write a message" id="message"/>
      <button style={inputStyle.button} id="btn" onClick={props.handleInput}>Send</button>
    </div>
  );
}