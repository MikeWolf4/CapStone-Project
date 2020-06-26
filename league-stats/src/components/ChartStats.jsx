import React, { Component } from "react";
import { Line } from "react-chartjs-2";

var optionsGold = {
  responsive: true,
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Most recent 10 Matches",
        },
        ticks: { reverse: true, fontSize: 10 },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Gold/Minute",
        },

        ticks: {
          beginAtZero: true, // minimum value will be 0.
          max: 700,
          min: 0,
        },
      },
    ],
  },
};

var optionsCs = {
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Most recent 10 Matches",
        },
        ticks: { reverse: true },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "CS/Minute",
        },
        ticks: {
          beginAtZero: true,
          max: 12,
          min: 0,
        },
      },
    ],
  },
};
var optionsObjDamage = {
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Most recent 10 Matches",
        },
        ticks: { reverse: true },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Damage/Minute",
        },

        ticks: {
          beginAtZero: true, // minimum value will be 0.
          max: 1200,
          min: 0,
        },
      },
    ],
  },
};
var optionsChampDamage = {
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Most recent 10 Matches",
        },
        ticks: { reverse: true },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Damage/Minute",
        },

        ticks: {
          beginAtZero: true, // minimum value will be 0.
          max: 1400,
          min: 0,
        },
      },
    ],
  },
};
var optionsKillParticipation = {
  scales: {
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Kill Participation %",
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
        },
      },
    ],
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Most recent 10 Matches",
        },
        ticks: { reverse: true },
      },
    ],
  },
};
var optionsVisionScore = {
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Most recent 10 Matches",
        },
        ticks: { reverse: true },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Vision Score",
        },

        ticks: {
          beginAtZero: true, // minimum value will be 0.
          max: 100,
          min: 0,
        },
      },
    ],
  },
};

class ChartStats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.state = {
      lineChartGold: {
        labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
        datasets: [
          {
            label: "Gold/Minute by Match",
            data: [
              this.props.matchData.match1.goldPerMinute,
              this.props.matchData.match2.goldPerMinute,
              this.props.matchData.match3.goldPerMinute,
              this.props.matchData.match4.goldPerMinute,
              this.props.matchData.match5.goldPerMinute,
              this.props.matchData.match6.goldPerMinute,
              this.props.matchData.match7.goldPerMinute,
              this.props.matchData.match8.goldPerMinute,
              this.props.matchData.match9.goldPerMinute,
              this.props.matchData.match10.goldPerMinute,
            ],
            backgroundColor: ["rgba(0, 0, 250, .2)"],
            borderColor: ["rgb(117, 47, 255, 1)"],
            borderWidth: 2,
          },
        ],
      },
      lineChartCs: {
        labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
        datasets: [
          {
            label: "CS/Minute by Match",
            data: [
              this.props.matchData.match1.csPerMinute,
              this.props.matchData.match2.csPerMinute,
              this.props.matchData.match3.csPerMinute,
              this.props.matchData.match4.csPerMinute,
              this.props.matchData.match5.csPerMinute,
              this.props.matchData.match6.csPerMinute,
              this.props.matchData.match7.csPerMinute,
              this.props.matchData.match8.csPerMinute,
              this.props.matchData.match9.csPerMinute,
              this.props.matchData.match10.csPerMinute,
            ],
            backgroundColor: ["rgba(0, 0, 250, .2)"],
            borderColor: ["rgb(117, 47, 255, 1)"],
            borderWidth: 2,
          },
        ],
      },
      lineChartObjDamage: {
        labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
        datasets: [
          {
            label: "Objective Damage/Minute by Match",
            data: [
              this.props.matchData.match1.objDamagePerMinute,
              this.props.matchData.match2.objDamagePerMinute,
              this.props.matchData.match3.objDamagePerMinute,
              this.props.matchData.match4.objDamagePerMinute,
              this.props.matchData.match5.objDamagePerMinute,
              this.props.matchData.match6.objDamagePerMinute,
              this.props.matchData.match7.objDamagePerMinute,
              this.props.matchData.match8.objDamagePerMinute,
              this.props.matchData.match9.objDamagePerMinute,
              this.props.matchData.match10.objDamagePerMinute,
            ],
            backgroundColor: ["rgba(0, 0, 250, .2)"],
            borderColor: ["rgb(117, 47, 255, 1)"],
            borderWidth: 2,
          },
        ],
      },
      lineChartChampDamage: {
        labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
        datasets: [
          {
            label: "Champion Damage/Minute by Match",
            data: [
              this.props.matchData.match1.champDamagePerMinute,
              this.props.matchData.match2.champDamagePerMinute,
              this.props.matchData.match3.champDamagePerMinute,
              this.props.matchData.match4.champDamagePerMinute,
              this.props.matchData.match5.champDamagePerMinute,
              this.props.matchData.match6.champDamagePerMinute,
              this.props.matchData.match7.champDamagePerMinute,
              this.props.matchData.match8.champDamagePerMinute,
              this.props.matchData.match9.champDamagePerMinute,
              this.props.matchData.match10.champDamagePerMinute,
            ],
            backgroundColor: ["rgba(0, 0, 250, .2)"],
            borderColor: ["rgb(117, 47, 255, 1)"],
            borderWidth: 2,
          },
        ],
      },
      lineChartKillParticipation: {
        labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
        datasets: [
          {
            label: "Kill Participation % by Match",
            data: [
              this.props.matchData.match1.killparticipation,
              this.props.matchData.match2.killparticipation,
              this.props.matchData.match3.killparticipation,
              this.props.matchData.match4.killparticipation,
              this.props.matchData.match5.killparticipation,
              this.props.matchData.match6.killparticipation,
              this.props.matchData.match7.killparticipation,
              this.props.matchData.match8.killparticipation,
              this.props.matchData.match9.killparticipation,
              this.props.matchData.match10.killparticipation,
            ],
            backgroundColor: ["rgba(0, 0, 250, .2)"],
            borderColor: ["rgb(117, 47, 255, 1)"],
            borderWidth: 2,
          },
        ],
      },
      lineChartVisionScore: {
        labels: ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"],
        datasets: [
          {
            label: "Vision Score by Match",
            data: [
              this.props.matchData.match1.visionScore,
              this.props.matchData.match2.visionScore,
              this.props.matchData.match3.visionScore,
              this.props.matchData.match4.visionScore,
              this.props.matchData.match5.visionScore,
              this.props.matchData.match6.visionScore,
              this.props.matchData.match7.visionScore,
              this.props.matchData.match8.visionScore,
              this.props.matchData.match9.visionScore,
              this.props.matchData.match10.visionScore,
            ],
            backgroundColor: ["rgba(0, 0, 250, .2)"],
            borderColor: ["rgb(117, 47, 255, 1)"],
            borderWidth: 2,
          },
        ],
      },
    };
    return (
      <div>
        <div className="chart__wrapper1">
          <div className="linechart__container1">
            <div className="linechart__gold">
              <Line
                data={this.state.lineChartGold}
                width={400}
                height={200}
                options={({ maintainAspectRatio: false }, optionsGold)}
              />
            </div>
          </div>
          <div className="linechart__container2">
            <div className="linechart__Cs">
              <Line
                data={this.state.lineChartCs}
                width={400}
                height={200}
                options={({ maintainAspectRatio: false }, optionsCs)}
              />
            </div>
          </div>
        </div>
        <div className="chart__wrapper2">
          <div className="linechart__container3">
            <div className="linechart__ObjDamage">
              <Line
                data={this.state.lineChartObjDamage}
                width={400}
                height={200}
                options={({ maintainAspectRatio: false }, optionsObjDamage)}
              />
            </div>
          </div>
          <div className="linechart__container4">
            <div className="linechart__ChampDamage">
              <Line
                data={this.state.lineChartChampDamage}
                width={400}
                height={200}
                options={({ maintainAspectRatio: false }, optionsChampDamage)}
              />
            </div>
          </div>
        </div>
        <div className="chart__wrapper2">
          <div className="linechart__container5">
            <div className="linechart__KillParticipation">
              <Line
                data={this.state.lineChartKillParticipation}
                width={400}
                height={200}
                options={
                  ({ maintainAspectRatio: false }, optionsKillParticipation)
                }
              />
            </div>
          </div>
          <div className="linechart__container6">
            <div className="linechart__VisionScore">
              <Line
                data={this.state.lineChartVisionScore}
                width={400}
                height={200}
                options={({ maintainAspectRatio: false }, optionsVisionScore)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartStats;
