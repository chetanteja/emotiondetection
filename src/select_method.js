import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Select_method(){


    let history = useNavigate();

    function go_back(){
        history("/"); 
    }

    return(
       <div  style={{ margin:"100px"}}>
        <a href="https://chetanteja.github.io/coloring_game/Coloring/coloring_game.html" target="_blank"  style={{ marginRight:"50px",height:"20px"}}><button onClick={go_back}>Play a coloring game</button></a>
        <a href="https://balaram-29.github.io/drum-kit.github.io/" target="_blank"  style={{ marginRight:"50px",height:"20px"}}><button onClick={go_back}>Play a some music</button></a>
        <a href="https://chetanteja.github.io/coloring_game/exercises/strategy_exercises.html" target="_blank" style={{ marginRight:"50px",height:"20px"}}><button onClick={go_back}>Do some exercises</button></a>        
        <a href="https://chetanteja.github.io/coloring_game/stories/stories.html" target="_blank" style={{ marginRight:"50px",height:"20px"}}><button onClick={go_back}>Listen to some stories</button></a>   
        
        <br/>
        <br/>
        <h3>Click below to go back to test</h3>
        <Link to="/"><button style={{ width: "100px", height: "40px"}}>Home</button></Link>
       </div> 
    )
}

export default Select_method;