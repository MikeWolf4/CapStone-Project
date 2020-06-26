import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const optionsGold = {
  title: {
    display: true,
    text: "",
    fontSize: 1,
  },
  legend: {
    display: false,
    position: "right",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        stacked: false,
        ticks: {
          fontSize: 10,
          beginAtZero: true,
          fontColor: "black",
          max: 700,
          min: 0,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },
      },
    ],
  },
};
const optionsCs = {
  title: {
    display: true,
    text: "",
    fontSize: 1,
  },
  legend: {
    display: false,
    position: "right",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontSize: 10,
          beginAtZero: true,
          fontColor: "black",
          max: 12,
          min: 0,
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },
      },
    ],
  },
};
const optionsObj = {
  title: {
    display: true,
    text: "",
    fontSize: 1,
  },
  legend: {
    display: false,
    position: "right",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontSize: 10,
          fontColor: "black",
          beginAtZero: true,
          max: 1200,
          min: 0, // minimum value will be 0.
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },
      },
    ],
  },
};
const optionsChamp = {
  title: {
    display: true,
    text: "",
    fontSize: 1,
  },
  legend: {
    display: false,
    position: "right",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontSize: 10,
          beginAtZero: true,
          fontColor: "black",
          beginAtZero: true,
          max: 1400,
          min: 0, // minimum value will be 0. minimum value will be 0.
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },
      },
    ],
  },
};
const optionsKpa = {
  title: {
    display: true,
    text: "",
    fontSize: 1,
  },
  legend: {
    display: false,
    position: "right",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontSize: 10,
          beginAtZero: true,
          fontColor: "black",
          suggestedMax: 100, // minimum will be 0, unless there is a lower value.
          beginAtZero: true, // minimum value will be 0.
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },
      },
    ],
  },
};
const optionsVision = {
  title: {
    display: true,
    text: "",
    fontSize: 1,
  },
  legend: {
    display: false,
    position: "right",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          fontSize: 10,
          beginAtZero: true,
          fontColor: "black",
          suggestedMax: 100, // minimum will be 0, unless there is a lower value.
          beginAtZero: true, // minimum value will be 0.
        },
      },
    ],
    xAxes: [
      {
        ticks: {
          fontColor: "black",
        },
      },
    ],
  },
};

class BarStats extends Component {
  getAverageGoldPerMinute(obj) {
    let goldtotal = 0;
    for (var key of Object.keys(obj)) {
      goldtotal = goldtotal + obj[key].goldPerMinute;
    }
    return goldtotal / 10;
  }
  getAverageCsPerMinute(obj) {
    let cstotal = 0;
    for (var key of Object.keys(obj)) {
      cstotal = cstotal + obj[key].csPerMinute;
    }
    return cstotal / 10;
  }
  getAverageobjDamagePerMinute(obj) {
    let objDamagetotal = 0;
    for (var key of Object.keys(obj)) {
      objDamagetotal = objDamagetotal + obj[key].objDamagePerMinute;
      console.log(obj[key].objDamagePerMinute);
    }
    return objDamagetotal / 10;
  }
  getAveragechampDamagePerMinute(obj) {
    let champDamagetotal = 0;
    for (var key of Object.keys(obj)) {
      champDamagetotal = champDamagetotal + obj[key].champDamagePerMinute;
    }
    return champDamagetotal / 10;
  }
  getAveragekillparticipation(obj) {
    let killparticipationtotal = 0;
    for (var key of Object.keys(obj)) {
      killparticipationtotal =
        killparticipationtotal + obj[key].killparticipation;
    }
    return killparticipationtotal / 10;
  }
  getAveragevisionScore(obj) {
    let visionScoretotal = 0;
    for (var key of Object.keys(obj)) {
      visionScoretotal = visionScoretotal + obj[key].visionScore;
    }
    return visionScoretotal / 10;
  }
  render() {
    this.state = {
      gold: {
        labels: ["Gold Per Minute"],
        datasets: [
          {
            label: "",
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [this.getAverageGoldPerMinute(this.props.matchData)],
          },
        ],
      },
      cs: {
        labels: ["CS Per Minute"],
        datasets: [
          {
            label: "",
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [this.getAverageCsPerMinute(this.props.matchData)],
          },
        ],
      },
      objDamage: {
        labels: ["Obj Damage Per Minute"],
        datasets: [
          {
            label: "",
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [this.getAverageobjDamagePerMinute(this.props.matchData)],
          },
        ],
      },
      ChampDamage: {
        labels: ["Champ Damage Per Minute"],
        datasets: [
          {
            label: "",
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [this.getAveragechampDamagePerMinute(this.props.matchData)],
          },
        ],
      },
      killparticipation: {
        labels: ["Kill Participation %"],
        datasets: [
          {
            label: "",
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [this.getAveragekillparticipation(this.props.matchData)],
          },
        ],
      },
      visionScore: {
        labels: ["Vision Score"],
        datasets: [
          {
            label: "",
            backgroundColor: "white",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: [this.getAveragevisionScore(this.props.matchData)],
          },
        ],
      },
    };
    return (
      <div className="playercard__container2">
        <p className="bar-title"> Overall Averages</p>
        <div className="bar-container">
          <div className="test-bar">
            <Bar data={this.state.gold} width={110} options={optionsGold} />
            <p className="bar-goal"> 500 or Higher</p>
          </div>
          <div className="test-bar">
            <Bar data={this.state.cs} width={105} options={optionsCs} />
            <p className="bar-goal"> 7 or Higher</p>
          </div>
          <div className="test-bar">
            <Bar data={this.state.objDamage} width={140} options={optionsObj} />
            <p className="bar-goal"> 700 or Higher</p>
          </div>
          <div className="test-bar">
            <Bar
              data={this.state.ChampDamage}
              width={150}
              options={optionsChamp}
            />
            <p className="bar-goal"> 1000 or Higher</p>
          </div>
          <div className="test-bar">
            <Bar
              data={this.state.killparticipation}
              width={120}
              options={optionsKpa}
            />
            <p className="bar-goal"> 50% or Higher</p>
          </div>
          <div className="test-bar">
            <Bar
              data={this.state.visionScore}
              width={110}
              options={optionsVision}
            />
            <p className="bar-goal"> 50 or Higher</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BarStats;
