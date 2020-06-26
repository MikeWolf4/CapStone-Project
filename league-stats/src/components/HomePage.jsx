import React, { Component } from "react";
import Select from "react-select";
import Logo from "../assets/header/logo.svg";
import { Link } from "react-router-dom";

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
      </div>
    );
  }
}

export default HomePage;
