import React from "react";
import "../styles/twocolumn.scss";
import AirtableIntegration from "./components/airtable.jsx";

const TwoColumn = (props) => {
  return (
    <div id="airtablediv">
      <div id="airtableform">{/* <AirtableIntegration /> */}</div>
      <div>&nbsp;</div>
      <div id="filler">&nbsp;</div>
    </div>
  );
};

export default TwoColumn;
