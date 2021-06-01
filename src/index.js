import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./styles.css";
import { cx, css, injectGlobal } from "emotion";

import {
  Button,
  Segment,
  Grid,
  Tab,
  Input,
  Label,
  Dropdown,
  List,
  Divider,
  Modal,
  Header,
  Icon
} from "semantic-ui-react";

import buttonStyles from "./styles/Button.styles";
import segmentStyles from "./styles/Segment.styles";
import gridStyles from "./styles/Grid.styles";
import tabStyles from "./styles/Tab.styles";
import menuStyles from "./styles/Menu.style";
import inputStyles from "./styles/Input.styles";
import labelStyles from "./styles/Label.style";
import dropdownStyles from "./styles/Dropdown.styles";
import transitionStyles from "./styles/Transition.style";
import listStyles from "./styles/List.style";
import dividerStyles from "./styles/Divider.style";
import modalStyles from "./styles/Modal.style";
import dimmerStyles from "./styles/Dimmer.style";
import headerStyles from "./styles/Header.style";
import iconStyles from "./styles/Icon.style";

import MainMenu from "./components/MainMenu";

export const globalStyles = `
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 14px;
    line-height: 1.5;
    color: #222;
    background-color: #fff;
    padding: 20px;
  }
`;

injectGlobal`
  ${globalStyles}
  ${modalStyles}
  ${dimmerStyles}
`;

class App extends Component {
  state = {
    center: [51.505, -0.091],
    zoom: 6,
    dfs: {"long_lat":[]}
  };

  componentDidMount() {
    // Simple GET request using fetch
    fetch('http://127.0.0.1:8000/json')
        .then(response => response.json())
        .then(data => this.setState({ dfs: data }));
        }

  render() {
    let markers = [];
    try{
      //console.log(typeof(this.state.dfs)===typeof(""));
      //console.log(this.state.dfs);
      //console.log(Object.entries(this.state.dfs["long_lat"]));
      //for(const [k,v] of Object.entries(JSON.parse(this.state.dfs)["long_lat"])){console.log(v);};

      for(const [k,v] of Object.entries(JSON.parse(this.state.dfs)["long_lat"])){markers.push(<Marker position={JSON.parse(v.replace(/'/g, ''))}><Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup></Marker>);};
      console.log("aahhaa");
    }catch(e){
      console.log(e);
      return(<div>Loading...</div>)
    }
    //          <Marker position={this.state.center}>
    return (
      <div
        className={cx(
          gridStyles,
          segmentStyles,
          buttonStyles,
          tabStyles,
          menuStyles,
          labelStyles,
          dropdownStyles,
          transitionStyles,
          listStyles,
          dividerStyles,
          headerStyles
        )}
      >
        <Map center={this.state.center} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {markers}
        </Map>
        <hr></hr>
        Wählen Sie ein Bundesland und ein Amtsgericht aus.
        <Grid>
          <Grid.Column width={16}>
            <Segment>
              <MainMenu />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
