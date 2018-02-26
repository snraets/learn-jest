
jest.mock('./foo');

import foo from './foo';

const myTest = jest.fn();

test('My mocks', function() {
    myTest()
    expect(myTest.mock.calls.length).toBe(1);
})

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

const mockCallback = jest.fn();
forEach([0, 1], mockCallback);

test('My mocks', function() {
    mockCallback();
    expect(mockCallback.mock.calls.length).toBe(3);
})

const myMock = jest.fn();

test('instances', function(){

    const a = new myMock()
    const b = myMock.bind({ name: 'testMe' });
    b();

    expect(myMock.mock.instances.length).toBe(2);    
});

const myMockNext = jest.fn()

test('stub', function(){

    myMockNext.mockReturnValueOnce(10)
    myMockNext.mockReturnValue(20);

    console.log(myMockNext());
    console.log(myMockNext());
});

test('mockImplementation', function(){
    const myMockFn = jest.fn(cb => cb + 1);
    console.log(myMockFn(500))
});

foo.mockImplementation((a) => 99);

test('replace module', function() {
    expect(foo(25)).toBe(99);
    expect(foo.mock.calls.length).toBe(1);
});

