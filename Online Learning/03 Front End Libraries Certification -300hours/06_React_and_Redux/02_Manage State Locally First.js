/* 
 
Here you'll finish creating the DisplayMessages component.

//----------------------------------------------------------

First, in the render() method, make the component render an 
input element, a button element, and an ul element. When the 
input element changes, it should trigger a handleChange() method. 
Also, the input element should render the value of input that's 
in the component's state. The button element should trigger a 
submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should 
update the input with what the user is typing. The submitMessage() 
method should concatenate the current message (stored in input) to 
the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it 
to the screen as a list of li elements.

 */

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  submitMessage = (event) => {  // OK 
    event.preventDefault();
    if(!this.state.input) {
      return 0;
    }
    this.setState((prevState) => ({
      messages: [...prevState.messages, this.state.input]
    }))

    this.setState({ 
      input: ''
    })
  }

/*   
  submitMessage = (event) => {  // WHY ??
    event.preventDefault();
    if(!this.state.input) {
      return 0;
    }
    this.setState((prevState) => {
      return prevState.messages.push(this.state.input)
    })
    this.setState({ 
      input: ''
    })
  } 
*/


/*   
  submitMessage(){  // OK !
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
      })
  }  
*/

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input 
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.submitMessage}> Submit</button>
        <ul>
          {this.state.messages.map((item, index) => <li key={index}>{item}</li>)}         
        </ul>

        { /* Change code above this line */ }
      <p>{this.state.messages}</p>
      </div>

    );
  }
};