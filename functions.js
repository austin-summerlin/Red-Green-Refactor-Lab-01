/* eslint-disable keyword-spacing */
export default ({ name }) => {
  return name;
};

export function copyAndPush(arr, x) {
  const copyArr = arr;
  copyArr.push(x);
  return [arr, copyArr];
}

export function capitalizeAndFilter(arr) {
  const fixedArr = arr
    .map(index => index.toUpperCase())
    .filter(capitalizedString => capitalizedString[0] !== 'F');
  return fixedArr;
}
