export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() { return this._code; }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('Code must be a string');
    }
    this._code = value;
  }

  get name() { return this._name; }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this._code})`;
  }
}
