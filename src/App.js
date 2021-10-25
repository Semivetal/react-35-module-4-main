import "./App.css";
import React, { Component } from "react";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";

const colorPickerOptions = [
  { label: "red", color: "#f44336" },
  { label: "green", color: "#4caf50" },
  { label: "blue", color: "#2196f3" },
  { label: "grey", color: "#607d8b" },
  { label: "pink", color: "#e91e63" },
  { label: "indigo", color: "#3f51b5" },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUpForm />
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Clock />
      </div>
    );
  }
}

export default App;
