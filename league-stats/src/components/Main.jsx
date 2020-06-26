import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header";
import HomePage from "./HomePage";
import PlayerCard from "./PlayerCard";
import ChartStats from "./ChartStats";
import BarStats from "./BarStats";
import Loading from "./Loading";
import axios from "axios";

class Main extends Component {
  state = {
    userData: {
      id: null,
      accountId: null,
      puuid: null,
      name: "Summoner",
      profileIconId: 0,
      revisionDate: null,
      summonerLevel: null,
    },
    matchHistory: null,
    rankData: {
      leagueId: null,
      queueType: null,
      tier: null,
      rank: null,
      summonerId: null,
      summonerName: null,
      leaguePoints: null,
      wins: 0,
      losses: 0,
      veteran: null,
      inactive: null,
      freshBlood: null,
      hotStreak: null,
    },
    matches: [],
  };

  pageData(props) {
    return (
      <div>
        <div className="topstats__container">
          <PlayerCard name="playerCard" playerData={this.state} {...props} />
          <BarStats name="BarStats" matchData={this.state.matches} {...props} />
        </div>
        <ChartStats
          name="ChartStats"
          matchData={this.state.matches}
          {...props}
        />
      </div>
    );
  }
  pageLoad() {
    return <Loading />;
  }

  searchHandle = (event) => {
    const { history } = this.props;
    let self = this;
    self.setState({ loading: false });
    axios
      .get(`http://localhost:3000/${event.region}/${event.Summoner}`)
      .then(function (res) {
        Object.values(res.data.matchData).reverse();
        self.setState({
          userData: res.data.userData,
          matchHistory: res.data.matchHistory,
          rankData: res.data.rankData,
          matches: res.data.matchData,
          loading: true,
        });
        console.log(
          Object.setPrototypeOf(res.data.matchData, Object.prototype)
        );
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <HomePage searchHandle={this.searchHandle} /> */}
            <Route
              path="/"
              exact
              render={(props) => (
                <div>
                  <HomePage {...props} searchHandle={this.searchHandle} />
                </div>
              )}
            />
            <Route
              path="/Summoner/:region/:userName"
              render={(props) => (
                <div>
                  <Header
                    name="header"
                    searchHandle={this.searchHandle}
                    {...props}
                  />
                  {this.state.loading ? this.pageData() : this.pageLoad()}
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
