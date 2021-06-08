import fetch from 'node-fetch';

export default ({ name }) => {
  return name;
};

export function copyAndPush(arr, x) {
  const copyArr = [...arr];
  copyArr.push(x);
  return [arr, copyArr];
}

export function capitalizeAndFilter(arr) {
  const fixedArr = arr
    .map(index => index.toUpperCase())
    .filter(capitalizedString => capitalizedString[0] !== 'F');
  return fixedArr;
}

export const fetchQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));
};
