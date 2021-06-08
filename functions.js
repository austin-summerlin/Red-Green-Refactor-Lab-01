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
  const fixedArr = [];
  for (const index in arr) {
    const capitalizedString = arr[index].toUpperCase();
    if (capitalizedString[0] !== 'F') {
      fixedArr[fixedArr.length] = capitalizedString;
    }
  }

  return fixedArr;
}
