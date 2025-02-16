interface String {
  parseList(this: string, delimiter?: string): string[];
  hasChar(this: string, char?: string): boolean;
  replaceChar(this: string, char?: string): string;
}

String.prototype.parseList = function (delimiter = ";") {
  return this.split(delimiter);
};

String.prototype.hasChar = function (char = "-") {
  return this.trim().startsWith(char);
};

String.prototype.replaceChar = function (char = "-") {
  if (this.hasChar()) return this.trimStart().replace(char, "");
  return this.trimStart();
};
