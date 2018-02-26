jest.mock('./boo');
jest.mock('./mult', () => ({
    aMult: () => 100
}));

import foo from './foo';
import boo from './boo';

import { aMult, bMult } from './mult';

test('was module replaced', function(){
    boo.mockReturnValue(100);
    expect(foo(100)).toBe(200);
});

test('multiple modules', function(){
    expect(aMult()).toBe(100);
});