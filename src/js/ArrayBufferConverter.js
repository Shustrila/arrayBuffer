export default class ArrayBufferConverter {
  load(data) {
    this.data = data;
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.data));
  }
}
