

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput 
          input={this.state.inputValue} 
          handleChange={this.handleChange}
        />

        <RenderInput 
          input={this.state.inputValue}
        />
        { /* Change code above this line */ }
       </div>
    );
  }
};


class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.input}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};