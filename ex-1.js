"use strict";

const data1 = {
  total: 5,
  shoes: [
    { forWhatGender: "v", price: 102.56 },
    { forWhatGender: "m", price: 215.7 },
    { forWhatGender: "m", price: 99.21 },
    { forWhatGender: "v", price: 200.0 },
    { forWhatGender: "v", price: 175.99 },
  ],
};

const data2 = {
  total: 2,
  shoes: [
    { forWhatGender: "m", price: 245.7 },
    { forWhatGender: "m", price: 150.99 },
  ],
};

// Utility functions

function formulateReview(gender, dataObj) {
  const total = countGenderShoePrice(gender, dataObj);
  const avrg = countGenderShoeAvrg(gender, dataObj);

  const result = total
    ? `per dieną parduota už ${total} Lt \n vidutiniškai viena batų pora kainavo ${avrg} Lt`
    : `Prekiauta nebuvo`;

  return result;
}

// Main functions

function countGenderShoePrice(gender, dataObj) {
  if (!dataObj?.shoes) return 0;

  const { shoes } = dataObj;

  if (!shoes.some((pair) => pair.forWhatGender === gender)) return 0;

  const filteredShoes = shoes.filter((pair) => pair.forWhatGender === gender);

  const result = filteredShoes.reduce((sum, { price }) => sum + price, 0);

  return result.toFixed(2);
}

// console.log(countGenderShoePrice("v", data1));

function countGenderShoeAvrg(gender, dataObj) {
  if (!dataObj?.shoes) return 0;

  const { shoes } = dataObj;

  if (!shoes.some((pair) => pair.forWhatGender === gender)) return 0;

  const shoePairNum = shoes.filter(
    (pair) => pair.forWhatGender === gender
  ).length;

  const totalSum = countGenderShoePrice(gender, dataObj);

  const result = totalSum / shoePairNum;

  return result.toFixed(2);
}

// console.log(countGenderShoeAvrg("v", data1));

function countTotalShoePrice(dataObj) {
  if (!dataObj?.shoes) return 0;

  const { shoes } = dataObj;

  const result = shoes.reduce((sum, { price }) => sum + price, 0);

  return result.toFixed(2);
}

// console.log(countTotalShoePrice(data2));

function renderResult(dataObj) {
  const totalSum = countTotalShoePrice(dataObj);

  const womenReview = formulateReview("m", dataObj);

  const menReview = formulateReview("v", dataObj);

  const result = `Moteriška avalynė: \n ${womenReview} \nVyriška avalynė: \n ${menReview} \nIš viso per dieną parduota avalynės už ${totalSum} Lt`;

  return result;
}

console.log(renderResult(data1));
