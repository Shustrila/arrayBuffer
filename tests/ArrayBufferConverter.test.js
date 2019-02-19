import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

describe('TEST: ArrayBufferConverter', () => {
  function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);

      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }

      return buffer;
    })(data);
  }

  test('decoding data', () => {
    const converter = ArrayBufferConverter.toString(getBuffer());
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(converter).toBe(expected);
  });

  test('conversion to a string', () => {
    const text = 'this is my sample string';
    const buffer = ArrayBufferConverter.load(text);
    const data = ArrayBufferConverter.toString(buffer);

    expect(data).toBe(text);
  });
});
