/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import '../styles/DataGenerator.scss';
// create a form
// takes inputs to generate topics, producers, consumers, etc.
class DataGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // updates the state of command string based on form input
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  // should send ksql command string to server to be run in terminal
  handleSubmit(event) {
    event.preventDefault();
    console.log('button clicked');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="ksql-form">
        <h2>KSQL CLI</h2>
        <label>Enter KSQL:</label>
        <input
          type="text"
          id="command"
          name="command"
          value={this.state.command}
          onChange={this.handleChange}
        />
        <button id="submit-command" name="submit" type="submit">
          Run Query
        </button>
        <button id="end-command" name="submit" type="submit">
          End Query
        </button>
      </form>
    );
  }
}

export default DataGenerator;
