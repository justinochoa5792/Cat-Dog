import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [dog, setDog] = useState("");
  const [cat, setCat] = useState("");

  async function clickMe() {
    const renderDog = async () => {
      const response = await Axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(response);
      setDog(response.data.message);
    };
    renderDog();
  }
  const showCat = () => {
    const renderCat = async () => {
      const response = await Axios.get(
        "https://cors-anywhere.herokuapp.com/https://aws.random.cat/meow"
      );
      console.log(response.data);
      setCat(response.data.file);
    };
    renderCat();
  };

  return (
    <div className="App">
      <button onClick={clickMe}>Click for Dogs!</button>
      <button onClick={showCat}>Click for Cats!</button>
      <h1>Random Dogs & Cat!</h1>
      <img src={dog} alt="" />
      <img src={cat} alt="" />
    </div>
  );
}

export default App;
