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

class Header extends Component {
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
      <div className="header__container">
        <div className="header__logo-container">
          <div className="header__logo">
            <Link to={"/"}>
              <img className="header__logo-img" src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <form
          onSubmit={this.handleFormSubmit}
          className="header__search-container"
        >
          <Select
            placeholder="NA"
            className="header__search-select"
            onChange={this.handleSelector}
            options={options}
          />
          <input
            className="header__search-input"
            onChange={this.handleInputChange}
            name="Summoner"
            type="text"
          />
          <button className="header__search-button">Search</button>
        </form>
      </div>
    );
  }
}

export default Header;
