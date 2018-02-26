// ALSO WORKS
// let boo = jest.doMock('./boo', () => ({
//     default: () => 100
// }));

let boo = jest.mock('./boo', () => ({default: () => 100  }));
jest.mock('./loo');

// DOES NOT WORK
// jest.mock('./boo').fn( () => 'default').mockReturnValue(100)

// DOES NOT WORK
// let boo = jest.mock('./boo').fn( () => 100);

import add from './foo';
import loo from './loo';

let aa = jest.fn(() => 'default').mockReturnValue(300);
let cc = jest.fn(() => 44);

loo.mockImplementation(() => 1000);

test('adds 22 + 100 to equal 122', () => {
    expect( add(22) ).toBe(122);
    expect( aa() ).toBe(300);
    expect(aa).toHaveBeenCalled();
    expect(cc()).toBe(44);
    expect(cc).toHaveBeenCalled();
    expect(loo()).toBe(1000);
    expect(loo).toHaveBeenCalled();
});