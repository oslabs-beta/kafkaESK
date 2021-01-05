import React, { Component } from "react";
import "../styles/airtable.scss";
import airtablelogo from "../images/airtable-logo.png";
//Instantiates Airtable and uses API key to connect to specific base
const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyrj2qx48S8OCScO" }).base(
  "appSgoXde9kcXPb0Q"
);

class AirtableIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Priority: "",
      Status: "Assigned",
      Description: "",
      "Error Number": "",
      "Assigned to": "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleChange(event) {
    //updates state based on form input values
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //creates a new record in Airtable    //on form submit creates a new record in airtable
    base("Bugs and issues").create(
      [
        {
          fields: this.state,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  }
  render() {
    return (
      <div id="airtablediv">
        <div id="airtableform">
          <div id="form-header">
            <img src={airtablelogo} id="airtable-logo" />
            <h2>Assign Cleanup/Troubleshooting</h2>
          </div>

          <form onSubmit={this.handleSubmit} id="airtableform">
            <div class="select">
              <select
                id="assigned"
                name="Assigned to"
                value={this.state["Assigned to"]}
                onChange={this.handleChange}
                required
              >
                <option>--Select to Assign--</option>
                <option>Chelsea Harris</option>
                <option>Brooke Luro</option>
                <option>Ai Mi Bui</option>
                <option>Spencer Flohr</option>
              </select>
              <div class="select_arrow"></div>
            </div>

            <div class="select">
              <select
                id="errornum"
                name="Error Number"
                value={this.state["Error Number"]}
                onChange={this.handleChange}
                required
              >
                <option>--Select Error Number--</option>
                <option>404</option>
                <option>405</option>
                <option>406</option>
                <option>407</option>
              </select>
              <div class="select_arrow"></div>
            </div>

            <div class="select">
              <select
                id="priority"
                name="Priority"
                value={this.state.Priority}
                onChange={this.handleChange}
                required
              >
                <option>--Select Priority Level--</option>
                <option>Critical</option>
                <option>High</option>
                <option>Normal</option>
                <option>Low</option>
              </select>
              <div class="select_arrow"></div>
            </div>
            <br></br>
            <label>Task Name</label>
            <input
              type="text"
              id="bugName"
              name="Name"
              value={this.state.Name}
              onChange={this.handleChange}
              required
            />
            <br></br>
            <br></br>
            <label>Description</label>
            <input
              type="text"
              id="bugdescription"
              name="Description"
              value={this.state.Description}
              onChange={this.handleChange}
              required
            />
            <br></br>
            <br></br>
            <button class="submit-airtable" name="submit" type="submit">
              Send to Airtable
            </button>
          </form>
        </div>
        <div>&nbsp;</div>
        <div id="filler">&nbsp;</div>
      </div>
    );
  }
}

export default AirtableIntegration;
