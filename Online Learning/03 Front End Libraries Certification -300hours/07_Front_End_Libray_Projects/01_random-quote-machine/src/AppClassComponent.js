import { Component } from 'react'; 

const quotes = [
  { id: 1 ,
    author: "Pablo Picasso",
    text:"Everything you can imagine is real.",
  },

  { id: 2,
    author: "Dr. Seuss",
    text:"Sometimes the questions are complicated and the answers are simple.",
  },
  { id: 3 ,
    author: "George Bernard Shaw",
    text:"Life isn't about finding yourself. Life is about creating yourself.",
  },
  { id: 4 ,
    author: "Dr. Seuss",
    text:"Today you are You, that is truer than true. There is no one alive who is Youer than You.",
  },
  { id: 5 ,
    author: "Woody Allen",
    text:"I'm not afraid of death; I just don't want to be there when it happens.",
  },
  { id: 6 ,
    author: "Markus Zusak",
    text:"Sometimes people are beautiful.Not in looks. Not in what they say. Just in what they are.",
  },
  { id: 7 ,
    author: "Albert Einstein",
    text:"Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  { id: 8 ,
    author: "John Green",
    text:"Some infinities are bigger than other infinities.",
  },
  { id: 9 ,
    author: "Bill Watterson",
    text:"Reality continues to ruin my life.",
  },
  { id: 10 ,
    author: "Stephen Chbosky",
    text:"Things change. And friends leave. Life doesn't stop for anybody.",
  },
];


export default class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes,
      randomIndex: 0,
      randomColor: 'darkorange',
    };
    this.handleRandomQuote = this.handleRandomQuote.bind(this);
  } 

  handleRandomQuote() {
    let newRandomIndex = Math.floor(Math.random() * this.state.quotes.length);
    if(newRandomIndex === this.state.randomIndex) {
      newRandomIndex += 1
    }
    if(newRandomIndex === this.state.quotes.length) {
      newRandomIndex = 0;
    }
    this.setState({
        randomIndex: newRandomIndex
    }) 
    this.setState({
      randomColor:'#' + Math.random().toString().slice(2, 8)
    })
  } 
    
  render() {
    const root = document.getElementById('root');
    root.style.backgroundColor = this.state.randomColor;
    return( 
      <article id="quote-box">
        <h1 
          id="text" 
          style={{color:this.state.randomColor}}> 
          <i className="fas fa-quote-left"></i>
          {this.state.quotes[this.state.randomIndex].text}
        </h1>
        <p 
          id="author" 
          style={{color:this.state.randomColor}}>
          - {this.state.quotes[this.state.randomIndex].author}
        </p>
        <div id="icons-container">
          <a 
            id="tweet-quote"
            style={{backgroundColor:this.state.randomColor}}
            href="twitter.com/intent/tweet"
            target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <button 
            id="new-quote" 
            style={{backgroundColor:this.state.randomColor}} 
            onClick={this.handleRandomQuote}>
            New Quote
          </button>
        </div>
      </article>
    );
  }
}

