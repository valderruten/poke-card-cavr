import React from "react";
import { useDispatch } from "react-redux";
import { setTrainerGlobal } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispath(setTrainerGlobal(e.target.name.value.trim()));
    e.target.name.value = '';
    navigate('/pokedex');
  };
  return (
    <div>
      <img src="/Home/pokedex.png" alt="" />
      <h1>Hi Trainer!!</h1>
      <p>give me your name to start</p>
      <form onSubmit={handleSubmit}>
        <input id="name" type="text" />
        <button>Start</button>
      </form>
    </div>
  );
};

export default Home;
