import React, { Component } from "react";
import Select from "react-select";
import Logo from "../assets/header/logo.svg";
import { Link } from "react-router-dom";
import Cloud9Logo from "../assets/teams/Cloud9logo.png";
import HundredThieves from "../assets/teams/100_Thieveslogo.png";
import Counter_Logic from "../assets/teams/Counter_Logic_Gaminglogo.png";
import Dignitas from "../assets/teams/Dignitaslogo.png";
import Eg from "../assets/teams/Eglogo.png";
import FlyQuest from "../assets/teams/FlyQuestlogo.png";
import Golden_Guardians from "../assets/teams/Golden_Guardianslogo.png";
import Immortals from "../assets/teams/Immortalslogo.png";
import Team_Liquid from "../assets/teams/Team_Liquidlogo.png";
import Team_SoloMid from "../assets/teams/Team_SoloMidlogo.png";

const options = [
  { value: "NA1", label: "NA" },
  { value: "KR", label: "KR" },
  { value: "JP1", label: "JP" },
  { value: "EUW1", label: "EUW" },
  { value: "EUN1", label: "EUN" },
  { value: "OC1", label: "OC" },
  { value: "BR1", label: "BR" },
  { value: "la1", label: "LAS" },
  { value: "la2", label: "LAN" },
  { value: "RU", label: "RU" },
  { value: "TR1", label: "TR" },
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: "NA1",
      Summoner: null,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      Summoner: event.target.value,
    });
  };

  handleSelector = (event) => {
    this.setState({
      region: event.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchHandle(this.state);
    this.props.history.push(
      `/Summoner/${this.state.region}/${this.state.Summoner}`
    );
  };

  render() {
    return (
      <div className="homepage__container">
        <div className="homepage__logo-container">
          <div className="homepage__logo">
            <img className="homepage__logo-img" src={Logo} alt="logo" />
          </div>
        </div>
        <form
          onSubmit={this.handleFormSubmit}
          className="homepage__search-container"
        >
          <Select
            placeholder="NA"
            className="homepage__search-select"
            onChange={this.handleSelector}
            options={options}
          />
          <input
            className="homepage__search-input"
            onChange={this.handleInputChange}
            name="Summoner"
            type="text"
          />

          <button className="homepage__search-button">search</button>
        </form>
        <div className="event__container">
          <div>
            <h2>LCS 2020 Summer Standings</h2>
            <p>
              1: <img src={Cloud9Logo} />
              ⁠Cloud9 4 - 0
            </p>
            <p>
              2: <img src={Counter_Logic} />
              ⁠Counter Logic Gaming 3 - 1
            </p>
            <p>
              2: <img src={Eg} />
              ⁠⁠Evil Geniuses 3 - 1
            </p>
            <p>
              2: <img src={FlyQuest} />
              ⁠⁠FlyQuest 3 - 1
            </p>
            <p>
              2: <img src={Team_Liquid} />
              ⁠⁠Team Liquid 3 - 1
            </p>
            <p>
              6: <img src={Team_SoloMid} />
              ⁠⁠Team SoloMid 2 - 2
            </p>
            <p>
              7: <img src={HundredThieves} />
              ⁠⁠100 Thieves 1 - 3
            </p>
            <p>
              7: <img src={Golden_Guardians} />
              ⁠⁠Golden Guardians 1 - 3
            </p>
            <p>
              9: <img src={Dignitas} />
              ⁠⁠Dignitas 0 - 4
            </p>
            <p>
              9: <img src={Immortals} />
              Immortals 0 - 4
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
