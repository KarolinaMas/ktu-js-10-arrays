"use strict";

const data = [
  { gender: "M", height: 180, sport: "K" },
  { gender: "V", height: 182, sport: "K" },
  { gender: "V", height: 175, sport: "T" },
  { gender: "V", height: 178, sport: "F" },
  { gender: "M", height: 164, sport: "F" },
  { gender: "M", height: 175, sport: "T" },
  { gender: "M", height: 162, sport: "S" },
  { gender: "V", height: 189, sport: "K" },
  { gender: "V", height: 188, sport: "K" },
  { gender: "M", height: 153, sport: "T" },
  { gender: "M", height: 168, sport: "S" },
  { gender: "M", height: 175, sport: "K" },
  { gender: "M", height: 170, sport: "T" },
  { gender: "M", height: 163, sport: "T" },
  { gender: "M", height: 169, sport: "S" },
  { gender: "M", height: 165, sport: "F" },
  { gender: "M", height: 173, sport: "K" },
  { gender: "V", height: 178, sport: "F" },
  { gender: "V", height: 178, sport: "F" },
  { gender: "V", height: 176, sport: "T" },
  { gender: "V", height: 189, sport: "F" },
  { gender: "V", height: 196, sport: "K" },
  { gender: "V", height: 182, sport: "T" },
  { gender: "V", height: 177, sport: "F" },
  { gender: "M", height: 159, sport: "S" },
  { gender: "M", height: 178, sport: "F" },
  { gender: "V", height: 169, sport: "F" },
  { gender: "M", height: 159, sport: "F" },
  { gender: "V", height: 179, sport: "F" },
  { gender: "V", height: 176, sport: "F" },
];

function countSportPlayers(dataArr, sportType) {
  sportType = sportType.toUpperCase();

  const result = dataArr.filter(({ sport }) => sport === sportType);

  return result;
}

// console.log(countSportPlayers(data, 'k'));

function countByGender(dataArr, sportType, playerGender) {
  playerGender = playerGender.toUpperCase();

  const sportArr = countSportPlayers(dataArr, sportType);

  const result = sportArr.filter(({ gender }) => gender === playerGender);

  return result.length;
}

// console.log(countByGender(data, "k", "m"));

function getAvgTeamHeight(dataArr, sportType) {
  sportType = sportType.toUpperCase();

  const sportArr = countSportPlayers(dataArr, sportType);

  const result =
    sportArr.reduce((sum, { height }) => sum + height, 0) / sportArr.length;

  return result.toFixed(0);
}

// console.log(getAvgTeamHeight(data, "k"));

function renderResult(dataArr) {
  const basketballPlayers = countSportPlayers(dataArr, "k");
  const basketballPlayersData = basketballPlayers
    .map(({ gender, height, sport }) => `${gender} ${height} ${sport}`)
    .join("\n");

  const result = `žaidžia krepšinį ${
    basketballPlayers.length
  } \nkomandą sudaro vaikinai ${countByGender(
    dataArr,
    "k",
    "v"
  )} merginos ${countByGender(dataArr, "k", "m")} \n${basketballPlayersData}`;

  return result;
}

console.log(renderResult(data));
