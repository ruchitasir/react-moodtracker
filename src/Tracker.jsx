import React, { useState } from 'react';
const DEFAULT_MOOD = 5;
const MIN_MOOD = -1;
const MAX_MOOD = 11;
const Tracker= props=> {
    let [mood,setMood]= useState(DEFAULT_MOOD);
    let moodDisplay = <span role="img" aria-label="img">🤔</span>
    let color =""
      
    if (mood===-1) {
         moodDisplay = <span role="img" aria-label="img">😡</span>
    }
    else if (mood<2) {
        color = 'gray'
        moodDisplay = <span role="img" aria-label="img">😐</span>
    }
    else if (mood<5) {
        color= "yellow"
        moodDisplay = <span role="img" aria-label="img">🧐</span>
    }
    else if (mood>5 && mood<8) {
        color = 'orange'
        moodDisplay = <span role="img" aria-label="img">😁</span>
    }
    else if (mood>=8 && mood<11) {
        color = 'green'
        moodDisplay = <span role="img" aria-label="img">😃</span>
    }
    else if (mood === 11) {
        color = 'pink'
        moodDisplay = <span role="img" aria-label="img">😂</span>
    }


    const down =()=>{
        // if mood is already at minimum, set it to minimum
        if(mood <= MIN_MOOD){
            setMood(MIN_MOOD)
        }
        else{
            setMood(mood-1)
        } 
    }

   return(
          <div className ={color}>
              <p>Mood: {mood}  </p>
              <p>I feel: {moodDisplay}</p>
              <button onClick={down}>
                <span role="img" aria-label="img">👎</span>
              </button>
              <button onClick={()=> mood >= MAX_MOOD ? setMood(MAX_MOOD) : setMood(mood +1) }>
                <span role="img" aria-label="img">👍</span>
              </button>
          </div>
          );
    }

export default Tracker