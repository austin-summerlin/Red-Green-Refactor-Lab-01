export default ({ name }) => {
  return name;
};

export function copyAndPush(arr, x) {
  const copyArr = arr;
  copyArr.push(x);
  return [arr, copyArr];
}

