import React from "react";

export const MyChat = (props) => {
  const chatStyle = {
    div: {
      padding: "10px",
      color: "black",
      fontFamily: "sans-serif",
      textAlign: "center",
      margin: "5px",
      overflow: "auto"
    },
    p: {
      backgroundColor: "aquamarine",
      color: "black",
      padding: "10px",
      borderRadius: "10px",
      float: "left",
      textAlign: "left"
    },
    ul: {
      float: "right",
      listStyle: "none"
    },
    li: {
      padding: "10px",
      borderRadius: "10px",
      margin: "10px",
      backgroundColor: "aquamarine",
      color: "black",
      wordWrap: "break-word",
      width: "150px"
    }
  };

  return (
    <div id="chat" style={chatStyle.div}>
      <p style={chatStyle.p}>Hey! How is that React course going?</p>
      <ul style={chatStyle.ul}>
        {props.message.map((msg) => 
        <li style={chatStyle.li}>{msg}</li>
        )}
      </ul>
    </div>
  );
};