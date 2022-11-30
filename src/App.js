import React, {useState} from "react";
import "./style.css";

import {Header} from './components/Header';
import {Input} from './components/Input';
import {MyChat} from './components/MyChat';

export default function App() {
  let [messages, setMessages] = useState([]);

  const handleInput = () => {
    let val = document.getElementById("message").value;
    let updatedMessage = messages.concat(val);
    setMessages(messages = updatedMessage)

    document.getElementById("message").value = "";
  }

  return (
    <div>
      <Header name="Billie Eilish" />
      <MyChat message={messages} />
      <Input handleInput={handleInput} />
    </div>
  );
}
