import React from "react";
import "../styles/airtable.scss";
import airtablelogo from "../images/airtable-logo.png";

const AirtableIntegration = (props) => {
  return (
    <div id="airtablediv">
      <div id="airtableform">
        <div id="form-header">
          <img src={airtablelogo} id="airtable-logo" />
          <h2>Assign Cleanup/Troubleshooting</h2>
        </div>
        <form>
          <div class="select">
            <select>
              <option>--Select Error Number--</option>
              <option>404</option>
              <option>405</option>
              <option>406</option>
              <option>407</option>
            </select>
            <div class="select_arrow"></div>
          </div>

          <div class="select">
            <select>
              <option>--Select Priority Level--</option>
              <option>Critical</option>
              <option>High</option>
              <option>Normal</option>
              <option>Low</option>
            </select>
            <div class="select_arrow"></div>
          </div>
          <br></br>
          <input type="text" />
          <br></br>
          <br></br>
          <button class="submit-airtable">Send to Airtable</button>
        </form>
      </div>
      <div>&nbsp;</div>
      <div id="filler">&nbsp;</div>
    </div>
  );
};

export default AirtableIntegration;
