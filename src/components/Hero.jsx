import { useState } from 'react';
import SoMe from './SoMe';

function Hero(){
    const facts = [
        'a dog mom 🐶',
        'anime lover 🎌',
        'SEO consultant 🔍',
        'calisthenics enthusiast 💪',
        'bookworm 📚'
      ];
     let factShown = facts.forEach( fact => console.log(fact) )
     function randomFact(){
        
        
     }
    return(
        <div className="lg:w-5xl lg:mx-auto">
          <h1 className="text-5xl text-text my-5">Hey, I am Evzi!</h1>
          <h2 className="text-2xl text-text">I am a junior front-end developer, <br></br>
          but I am also <span className="font-bold">{facts[0]}</span> </h2>
          <div className="my-5 fill-text"><SoMe /></div>
          
        </div>
    )
}

export default Hero;