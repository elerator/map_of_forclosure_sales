import React, { useState } from "react";
import { Dropdown, Button, Grid } from "semantic-ui-react";

let federal_state_id_to_court = require("../federal_state_id_to_court.json");
let federal_state_id_to_name = require("../federal_state_id_to_name.json");
let stateOptions = []; //stateOptions = [{ key: "AL", text: "Alabama", value: "AL" },]
Object.keys(federal_state_id_to_name).map((x, _) =>
  stateOptions.push({ key: x, text: federal_state_id_to_name[x], value: x })
);
let courtOptions = [];

function MainMenu(props) {
  const [currentFederalStateID, setCurrentFederalStateID] = useState(null);
  const [currentCourtID, setCurrentCourtID] = useState(null);

  function setCourtOptions(federalStateID) {
    courtOptions = [];
    for (var x of JSON.parse(federal_state_id_to_court[federalStateID])) {
      courtOptions.push({ key: x, text: x, value: x });
    }
  }

  const onChangeFederalState = (event, result) => {
    const selectedOption = result || event.target;
    let federalStateID = selectedOption["value"];
    //console.log(federalStateID);
    setCourtOptions(federalStateID);
    setCurrentFederalStateID(federalStateID);
  };

  const onChangeCourt = (event, result) => {
    const selectedOption = result || event.target;
    let courtID = selectedOption["value"];
    setCurrentCourtID(courtID);
  };

  return (
    <Grid>
      <Grid.Column width={12}>
        <Dropdown
          placeholder="State"
          search
          options={stateOptions}
          onChange={onChangeFederalState}
        />

        <Dropdown
          placeholder="Amtsgericht"
          search
          options={courtOptions}
          onChange={onChangeCourt}
        />
      </Grid.Column>

      <Grid.Column width={3}>
        <Button primary>Search</Button>
      </Grid.Column>
    </Grid>
  );
}

export default MainMenu;
