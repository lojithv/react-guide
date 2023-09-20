import React from 'react';

class App extends React.Component {
  constructor(props:any) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${this.state.firstName} ${this.state.lastName}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName} 
            onChange={this.handleChange} 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName} 
            onChange={this.handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
