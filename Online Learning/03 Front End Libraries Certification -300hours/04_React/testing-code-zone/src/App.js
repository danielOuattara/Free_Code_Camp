import './App.css';
import { Component, } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: '',
      toDoList: [],
    }
    // Change code above this line
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* 
  handleSubmit() { // basic, OK!
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  } 
  */

  // handleSubmit() {  // OK! 
  //   this.setState({
  //     toDoList: [...this.state.toDoList, this.state.userInput],
  //     userInput: ''
  //   });
  // }

  handleSubmit() {  // OK! but duplicate each item because of React.StrictMode
    this.setState( prevState => {
      return prevState.toDoList.push(this.state.userInput)
    })
    this.setState({userInput : ''});
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

    render() {
      // Change the line below
      const items = this.state.toDoList.map((item,index) => <li key={index} >{item}</li>); 
      return (
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.userInput}
            style={textAreaStyles}
            placeholder='Separate Items With Commas'
          />
          <br />
          <button onClick={this.handleSubmit}>Create List</button>
          <h1>My "To Do" List:</h1>
          <ul>{items}</ul>
        </div>
      );
    }
}

export default App;

const textAreaStyles = {
  width: 235,
  margin: 5
};

//------------------------------------------------------------------
// Using function component & hooks: OK!

// import {useState} from 'react'

// const textAreaStyles = {
//   width: 235,
//   margin: 5
// };

// export default function App() {
//   const[userInput, setUserInput] = useState('')
//   const [toDoList, setToDoList] = useState([]);


//   const handleSubmit = () => {
//     if(userInput === '') {
//       return
//     }
//     setToDoList( () => {
//       return [...toDoList, userInput]
//     });
//     setUserInput('');   
//   } 

//   const handleChange = (e) => {
//     setUserInput(e.target.value)
//   }

//       const items = toDoList.map((item,index) => <li key={index} >{item}</li>); 
//   return (
//         <div>
//           <textarea
//             onChange={handleChange}
//             value={userInput}
//             style={textAreaStyles}
//             placeholder='Separate Items With Commas'
//           />
//           <br />
//           <button onClick={handleSubmit}>Create List</button>
//           <h1>My "To Do" List:</h1>
//           <ul>{items}</ul>
//         </div>
//       );
// }
