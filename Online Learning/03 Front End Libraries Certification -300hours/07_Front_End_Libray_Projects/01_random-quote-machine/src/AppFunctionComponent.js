import {useState} from "react";
import data from './data';


export default function RandomQuote() {
   
  const [ randomIndex, setRandomIndex ] = useState(0);
  const [ randomColor, setRandomColor] = useState("orange");
  
  const handleRandomQuote = () => {
    let newRandomIndex = Math.floor(Math.random() * data.length);
    if(newRandomIndex === randomIndex) {
      newRandomIndex += 1
    }
    if(newRandomIndex === data.length) {
      newRandomIndex = 0
    }
    setRandomIndex(() => newRandomIndex)
    setRandomColor(() => '#' + Math.random().toString().slice(2, 8))
  } 

  const root = document.getElementById('root');
  root.style.backgroundColor = randomColor;
  
  return (
     <section id="quote-box">
       <h1 
         id="text" 
         style={{color: randomColor}}> 
         <i className="fas fa-quote-left"></i>
         {data[randomIndex].text}
       </h1>
       <p 
         id="author" 
         style={{color:randomColor}}>
         - {data[randomIndex].author}
       </p>
       <div id="icons-container">
         <a 
           id="tweet-quote"
           style={{backgroundColor:randomColor}}
           href="twitter.com/intent/tweet"
           target="_blank">
           <i className="fab fa-twitter"></i>
         </a>
         <button 
            id="new-quote" 
            style={{backgroundColor: randomColor}} 
            onClick={handleRandomQuote}>
           New Quote
          </button>
       </div>
     </section>
  );
 }
  