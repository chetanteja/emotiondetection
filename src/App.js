import Camera from './EmotionRecognition/Camera';
import Test from './Test';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Select_method from './select_method';
import { useEffect, useState } from 'react';




function App() {

const [emotion,setEmotion] = useState("happy")

useEffect(()=>{
  localStorage.setItem('curr_question',0)
},[])

let history = useNavigate();

const handleChange = (outp)=>{
  setEmotion(outp)
  console.log(emotion)
  if(outp==='Anger' || outp=== 'Disgust'|| outp==='Fear'||outp==='Sad'||outp==='Surprise'){
    console.log("coming here");
    history("/Select_method");
  }
}

  return (
    <div className="App">
      <Routes>
      <Route path="/Select_method" exact element={<Select_method/>} />
      <Route path="/" exact element={<Camera changeEmotion={handleChange}/>}>
      </Route>
      </Routes>
    </div>
  );
}

export default App;

