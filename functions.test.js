import getName from './redGreenRefactor.js';

describe('getName', () => {
  it('returns name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('Spot');
  });
});
