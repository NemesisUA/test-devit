String.prototype.removeDuplicate = function () {
  let words = this.split(' ');
  let unique = new Set(words);
  return [...unique].join(' ');
}