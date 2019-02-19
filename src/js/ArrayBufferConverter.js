export default class ArrayBufferConverter {
  /***
   * @param {String} buffer - string buffer;
   * @returns {ArrayBuffer}
   */
  static load(buffer) {
    const arr = new ArrayBuffer(buffer.length * 2);
    const uintArray = new Uint16Array(arr);

    [...buffer].forEach((item, i) => {
      uintArray[i] = item.charCodeAt();
    });

    return arr;
  }

  /***
   * @param {String} buffer - conversion to a string
   * @returns {string}
   */
  static toString(buffer) {
    return String.fromCharCode(...new Uint16Array(buffer));
  }
}
