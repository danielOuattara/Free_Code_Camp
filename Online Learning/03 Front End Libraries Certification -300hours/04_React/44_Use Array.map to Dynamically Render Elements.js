// const textAreaStyles1 = {
//   width: 235,
//   margin: 5,
// };

// class MyToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     // Change code below this line
//     this.state = {
//       userInput: "",
//       toDoList: [],
//     };

//     // Change code above this line
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit() {
//     const itemsArray = this.state.userInput.split(",");
//     this.setState({
//       toDoList: itemsArray,
//     });
//   }

//   handleChange(e) {
//     this.setState({
//       userInput: e.target.value,
//     });
//   }

//   render() {
//     // Change the line below
//     const items = this.state.toDoList.map((item) => <li>{item}</li>);
//     return (
//       <div>
//         <textarea
//           onChange={this.handleChange}
//           value={this.state.userInput}
//           style={textAreaStyles}
//           placeholder="Separate Items With Commas"
//         />
//         <br />
//         <button onClick={this.handleSubmit}>Create List</button>
//         <h1>My "To Do" List:</h1>
//         <ul>{items}</ul>
//       </div>
//     );
//   }
// }

//---------------------------------------------------

const textAreaStyles2 = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: "",
      toDoList: ["hello"],
    };

    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /*   handleSubmit() {
      this.setState( prevState => {
        return prevState.toDoList.push(this.state.userInput)
      })
      console.log(this.state.toDoList)
      this.state.userInput = '';
    }
     */

  handleSubmit() {
    this.setState({
      toDolist: [...this.state.toDoList, this.state.userInput],
      userInput: "",
    });
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    console.log(this.state.userInput);
    // Change the line below
    const items = this.state.toDoList.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

const textAreaStyles3 = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state = {
      userInput: "",
      toDoList: ["hello", "dishes"],
    };

    // Change code above this line
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*   handleSubmit() {
      this.setState( prevState => {
        return [...prevState.toDoList, this.state.userInput]
      })
      // this.state.userInput = '';
      console.log("this.state.toDoList = ", this.state.toDoList)
    } */

  handleSubmit() {
    this.setState({
      toDolist: [...this.state.toDoList, this.state.userInput],
      userInput: "",
    });
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    // Change the line below
    console.log(this.state.userInput);
    console.log(this.state.toDoList);
    const items = this.state.toDoList.map((item, index) => (
      <li key={index}>{item}</li>
    ));
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
