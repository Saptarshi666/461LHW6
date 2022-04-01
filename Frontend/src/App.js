import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', lastName: ''};
  //  this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({value: event.target.value});

    fetch("/name/" + event.target.value)
      .then(response => response.json())
      .then(data => {this.setState({lastName: data.lastName}); console.log(this.state.lastName);})
  };
  render() {
    return (
      <div>
        <p>Write Saptarshi </p>
        <input
          type = "text"
          name = "username"
          value = {this.state.value}
          onChange={this.handleChange}
        />
        <p>{this.state.lastName}</p>
      </div>
    );
  }
}
export default App;
