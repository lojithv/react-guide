import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Subscribe } from "@react-rxjs/core";
import TextInput from "./components/TextInput";
import CharacterCount from "./components/CharacterCounter";

function App() {
  return (
    <div>
      <Subscribe>
        <TextInput />
        <CharacterCount />
      </Subscribe>
    </div>
  );
}

export default App;
