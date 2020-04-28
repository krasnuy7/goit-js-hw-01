class StringBuilder {
  constructor(str) {
    this.str = str;
  }
  get value() {
    return this.str;
  }
  append(symbol) {
    this.str += symbol;
  }
  prepend(symbol) {
    this.str = symbol + this.str;
  }
  pad(symbol) {
    this.str = symbol + this.str + symbol;
  }
}

const builder = new StringBuilder(".");
console.log(builder.value);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
