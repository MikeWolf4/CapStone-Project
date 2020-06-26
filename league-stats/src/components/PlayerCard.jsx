import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

let options = {
  legend: {
    display: false,
  },
};

class PlayerCard extends Component {
  win() {
    try {
      return this.props.playerData.rankData.wins;
    } catch (e) {
      return 0;
    }
  }
  lose() {
    try {
      return this.props.playerData.rankData.losses;
    } catch (e) {
      return 0;
    }
  }
  percentRatio() {
    try {
      return (
        (this.props.playerData.rankData.wins /
          (this.props.playerData.rankData.losses +
            this.props.playerData.rankData.wins)) *
        100
      );
    } catch (e) {
      return 0;
    }
  }
  imageCatch() {
    try {
      return this.props.playerData.userData.profileIconId;
    } catch (e) {
      return 0;
    }
  }
  tierRankCatch() {
    try {
      return (
        this.props.playerData.rankData.tier +
        " " +
        this.props.playerData.rankData.rank
      );
    } catch (e) {
      return "none";
    }
  }
  tierImageCatch() {
    try {
      return this.props.playerData.rankData.tier;
    } catch (e) {
      return "Unranked";
    }
  }
  render() {
    this.state = {
      winLossDonut: {
        labels: ["Wins", "Loss"],
        datasets: [
          {
            label: "Win/Losses",
            data: [this.win(), this.lose()],
            backgroundColor: ["#00FF00", "#FF0000"],
          },
        ],
      },
    };
    return (
      <div className="playercard__container">
        <div className="playercard__profile-pic-container">
          <img
            className="playercard__profile-pic"
            src={require("../assets/riot_img/profile_icon/" +
              this.imageCatch() +
              ".png")}
            alt=""
          />
          <h4 className="playercard__profile-rank-stat2">WINRATE</h4>
          <Doughnut
            options={options}
            data={this.state.winLossDonut}
            width={20}
            height={20}
          />
          <h4 className="playercard__donut-percent">
            {Math.round(this.percentRatio())}%
          </h4>
        </div>

        <div>
          <div className="playercard__profile-data-container">
            <h1 className="playercard__name">
              {this.props.playerData.userData.name}
            </h1>
            <h4 className="playercard__profile-rank-stat">RANKED SOLO 5x5</h4>
            <img
              className="playercard__profile-pic2"
              src={require("../assets/riot_img/rank_emblems/" +
                this.tierImageCatch() +
                ".png")}
              alt=""
            />
            <h4 className="playercard__profile-rank-stat">
              RANK: {this.tierRankCatch()}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerCard;
