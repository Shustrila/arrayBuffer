import ArrayBufferConverter from '../src/js/ArrayBufferConverter';
import getBuffer from '../src/js/getBuffer';

describe('TEST: ArrayBufferConverter', () => {
  test('decoding data', () => {
    const abc = new ArrayBufferConverter();
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    abc.load(getBuffer());
    expect(abc.toString()).toBe(expected);
  });
});
