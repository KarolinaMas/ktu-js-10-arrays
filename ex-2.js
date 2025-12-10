"use strict";

const data1 = {
  totalPumkins: 5,
  smalestWeight: 2.5,
  largestWeight: 5,
  pumkinWeight: [2, 4.75, 3.5, 5.8, 3],
};

const data2 = {
  totalPumkins: 2,
  smalestWeight: 2.5,
  largestWeight: 5,
  pumkinWeight: [2, 6.4],
};

function countAvgWeight(dataObj) {
  if (!dataObj.pumkinWeight) return 0;

  const { pumkinWeight } = dataObj;

  const totalWeight = pumkinWeight.reduce((sum, acc) => sum + acc);

  const result = totalWeight / pumkinWeight.length;

  return result.toFixed(3);
}

// console.log(countAvgWeight(data1));

function getSelectedPumkins(dataObj) {
  if (!dataObj.pumkinWeight) return 0;

  const { smalestWeight, largestWeight, pumkinWeight } = dataObj;

  const result = pumkinWeight
    .filter((pumkin) => pumkin >= smalestWeight && pumkin <= largestWeight)
    .map((pumkin) => pumkin.toFixed(3));

  return result;
}

// console.log(getSelectedPumkins(data2));

function getSelectedAvgWeight(dataObj) {
  if (!dataObj.pumkinWeight) return 0;
  if (getSelectedPumkins(dataObj).length === 0) return 0;

  const selectedPumkins = getSelectedPumkins(dataObj);

  const total = selectedPumkins.reduce((sum, acc) => {
    const sumNum = Number(sum);
    const accNum = Number(acc);
    return sumNum + accNum;
  });

  const result = total / selectedPumkins.length;

  return result.toFixed(3);
}

// console.log(getSelectedAvgWeight(data2));

function renderResult(dataObj) {
  const allPumkinAvg = countAvgWeight(dataObj);
  const selectedPumkinNum = getSelectedPumkins(dataObj).length;
  const selectedPumkin = getSelectedPumkins(dataObj).join(" ");
  const selectedPumkinAvg = getSelectedAvgWeight(dataObj);

  const selectedPumkinRes = selectedPumkin
    ? ` \nĮ supirkimą atrinkta: ${selectedPumkinNum} \nVidutinis vieno atrinkto moliūgo svoris: ${selectedPumkinAvg} kg \nAtrinktų moliūgų sąrašas: ${selectedPumkin} .`
    : `\nĮ supirkimo punktą atrinktų moliūgų nėra.`;

  const result = `Visų moliūgų vidutinis svoris: ${allPumkinAvg} kg ${selectedPumkinRes}`;
  return result;
}

console.log(renderResult(data2));
