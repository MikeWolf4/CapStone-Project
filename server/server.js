const express = require("express");
const axios = require("axios");
const { response } = require("express");
const app = express();
app.use(express.json(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// needs to be refreshed every 24 hours
const apikey = "RGAPI-dd2b23a3-6979-45c5-ba4c-7120bbb74caf";
let region = "na1";

let userData = {};

let rankData = {};

let matchHistory = {};

let matchId = [];

let MatchData = [];

function getTeamKills(array, id) {
  if (id < 6) {
    let score =
      array.find((x) => x.participantId === 1).stats.kills +
      array.find((x) => x.participantId === 2).stats.kills +
      array.find((x) => x.participantId === 3).stats.kills +
      array.find((x) => x.participantId === 4).stats.kills +
      array.find((x) => x.participantId === 5).stats.kills;
    return score;
  } else {
    let score =
      array.find((x) => x.participantId === 6).stats.kills +
      array.find((x) => x.participantId === 7).stats.kills +
      array.find((x) => x.participantId === 8).stats.kills +
      array.find((x) => x.participantId === 9).stats.kills +
      array.find((x) => x.participantId === 10).stats.kills;
    return score;
  }
}

function getDataById(array) {
  let matchTime = Math.floor(array.data.gameDuration / 60);
  let arrayId = array.data.participantIdentities;
  let arrayData = array.data.participants;
  let id = arrayId.find((x) => x.player.summonerName === userData.name)
    .participantId;
  let idData = arrayData.find((z) => z.participantId === id);
  let dataObj = {
    goldPerMinute: Math.ceil(idData.stats.goldEarned / matchTime),
    csPerMinute: Math.ceil(idData.stats.totalMinionsKilled / matchTime),
    objDamagePerMinute: Math.floor(
      idData.stats.damageDealtToObjectives / matchTime
    ),
    champDamagePerMinute: Math.floor(
      idData.stats.totalDamageDealtToChampions / matchTime
    ),
    killparticipation: Math.floor(
      ((idData.stats.kills + idData.stats.assists) /
        getTeamKills(arrayData, id)) *
        100
    ),
    visionScore: idData.stats.visionScore,
    didWin: idData.stats.win,
    matchLength: matchTime,
  };
  return dataObj;
}

function getMatchDetails() {
  axios
    .all([
      match1(),
      match2(),
      match3(),
      match4(),
      match5(),
      match6(),
      match7(),
      match8(),
      match9(),
      match10(),
    ])
    .then(
      axios.spread(function (
        match1,
        match2,
        match3,
        match4,
        match5,
        match6,
        match7,
        match8,
        match9,
        match10
      ) {
        MatchData = {
          match1: getDataById(match1),
          match2: getDataById(match2),
          match3: getDataById(match3),
          match4: getDataById(match4),
          match5: getDataById(match5),
          match6: getDataById(match6),
          match7: getDataById(match7),
          match8: getDataById(match8),
          match9: getDataById(match9),
          match10: getDataById(match10),
        };
        Object.values(MatchData).reverse();
        console.log(Object.values(MatchData).reverse());
      })
    );
}

async function getMatchHistory(accountId) {
  // gets ranked data
  historyArray = [];
  axios
    .get(
      `https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?queue=420&api_key=${apikey}`
    )
    .then(function (resp) {
      for (var i = 0; i < 10; i++) {
        historyArray.push(resp.data.matches[i]);
      }
      matchHistory = historyArray;
      console.log("match history retrieved");
      matchId = matchHistory.map((x) => x.gameId);
      console.log(matchHistory.map((x) => x.gameId));
      getMatchDetails();
    })
    .catch(function (err) {
      //console.log(err);
      console.log("match history failed");
    });
}

async function getRankedData(encryptedUserId) {
  // gets ranked data
  axios
    .get(
      `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedUserId}?api_key=${apikey}`
    )
    .then(function (resp) {
      rankData = resp.data[0];
      console.log("rank data retrieved");
    })
    .catch(function (err) {
      //console.log(err);
      console.log("rank data failed");
    });
}

app.get("/:region/:userName", (request, response) => {
  const userName = request.params.userName;
  region = request.params.region;
  let encryptedUserId = null;
  // gets account data
  axios
    .get(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userName}?api_key=${apikey}`
    )
    .then(function (res) {
      userData = res.data;
      getRankedData(res.data.id);
      getMatchHistory(res.data.accountId);
      console.log("account data retrieved");
    })
    .catch(function (err) {
      //console.log(err);
      console.log("account data failed");
    });
  setTimeout(function () {
    response.json({
      userData: userData,
      rankData: rankData,
      matchHistory: matchHistory,
      matchData: MatchData,
    });
  }, 2000);
});

app.listen(3000, () => console.log("Listening on port 3000"));

function match1() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[0]}?api_key=${apikey}`
  );
}
function match2() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[1]}?api_key=${apikey}`
  );
}
function match3() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[2]}?api_key=${apikey}`
  );
}
function match4() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[3]}?api_key=${apikey}`
  );
}
function match5() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[4]}?api_key=${apikey}`
  );
}
function match6() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[5]}?api_key=${apikey}`
  );
}
function match7() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[6]}?api_key=${apikey}`
  );
}
function match8() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[7]}?api_key=${apikey}`
  );
}
function match9() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[8]}?api_key=${apikey}`
  );
}
function match10() {
  return axios.get(
    `https://${region}.api.riotgames.com/lol/match/v4/matches/${matchId[9]}?api_key=${apikey}`
  );
}
