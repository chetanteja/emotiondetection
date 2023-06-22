import React from 'react';
import App from './App';
import { useNavigate } from "react-router-dom";



function Start() {
let history = useNavigate();
  return (
    <div>
      <button onClick={history("/")}>START THE QUIZ</button>
    </div>
  );
}

export default Start;
