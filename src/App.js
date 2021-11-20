import { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import axios from "axios";


function App() {
  const [text, setText] = useState("0");

  const handleClick = () => {
    axios.get("http://127.0.0.1:8000/test?id="+text).then((res) => {
      console.log(text);
      console.log(res);
      setText(res.data);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={handleClick}>
          PUSH!!
        </button>
        <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;