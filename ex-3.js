"use strict";

const data = {
  days: 10,
  participants: [
    {
      name: "Simas",
      total: 100,
      spent: [2.5, 7, 3.25, 2.5, 0, 0, 4.25, 1.25, 5.25, 2],
    },
    {
      name: "Linas",
      total: 105,
      spent: [3, 5, 2.75, 2.35, 1.5, 0, 2.75, 1, 1.25, 1],
    },
    {
      name: "Mantas",
      total: 120,
      spent: [1.5, 4, 1.57, 2.4, 2, 0, 3.25, 1.35, 6, 3],
    },
  ],
};

// Utility functions

function toSentenceCase(string) {
  const result = string[0].toUpperCase() + string.slice(1, string.length);
  return result;
}

// console.log(toSentenceCase("simas"));

// Main functions

function countTotalSpent(dataObj, personName) {
  personName = toSentenceCase(personName);

  const { participants } = dataObj;

  const personObj = participants.find(({ name }) => name === personName);

  const result = personObj.spent.reduce((sum, acc) => sum + acc);

  return result.toFixed(2);
}

// console.log(countTotalSpent(data, "simas"));

function countAvgDayExp(dataObj, personName) {
  personName = toSentenceCase(personName);

  const { days } = dataObj;

  const totalSpent = countTotalSpent(dataObj, personName);

  const result = Number(totalSpent) / days;

  return result.toFixed(2);
}

// console.log(countAvgDayExp(data, "Mantas"));

function countRemaider(dataObj, personName) {
  personName = toSentenceCase(personName);

  const { participants } = dataObj;

  const personObj = participants.find(({ name }) => name === personName);

  const spent = countTotalSpent(dataObj, personName);

  const result = personObj.total - spent;

  return result.toFixed(2);
}

// console.log(countRemaider(data, "linas"));

function countDaysSpentMore(dataObj, personName) {
  personName = toSentenceCase(personName);

  const { participants } = dataObj;

  const personObj = participants.find(({ name }) => name === personName);

  const spentAvg = countAvgDayExp(dataObj, personName);

  const result = personObj.spent.filter((money) => money > Number(spentAvg));

  return result.length;
}

// console.log(countDaysSpentMore(data, "simas"));

function countDaysSpentMoreTotal(dataObj) {
  const { participants } = dataObj;

  const totalArr = participants.map(({ name }) =>
    countDaysSpentMore(dataObj, name)
  );

  const result = totalArr.reduce((sum, acc) => sum + acc);

  return result;
}

// console.log(countDaysSpentMoreTotal(data));

function renderResult(dataObj) {
  const { participants } = dataObj;

  const totalspent = participants
    .map(({ name }) => countTotalSpent(dataObj, name))
    .join(" ");

  const avgLeft = participants
    .map(({ name }) => countAvgDayExp(dataObj, name))
    .join(" ");

  const result = `Vaikinai išleido: ${totalspent} \nDienos išlaidų vidurkis: ${avgLeft} \nVaikinams liko pinigų: \nSimui: ${countRemaider(
    dataObj,
    "simas"
  )}; Linui: ${countRemaider(dataObj, "linas")}; Mantui: ${countRemaider(
    dataObj,
    "mantas"
  )}; \nDienų skaičius, kai vaikinai išleido daugiau už savo dienos vidurkį: ${countDaysSpentMoreTotal(
    dataObj
  )}`;
  return result;
}

console.log(renderResult(data));
