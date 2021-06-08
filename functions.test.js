import getName from './functions';
import { copyAndPush } from './functions';

describe('getName', () => {
  it('returns name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('spot');
  });
});

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4);
    expect(newArray).toEqual([1, 2, 3, 4]);
  });
});
