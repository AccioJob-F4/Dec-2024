Array.prototype.includes = function (searchElement, fromIndex) {
  const arr = this;
  const len = arr.length;

  if (len === 0) return false;

  let start = fromIndex || 0;

  if (start < 0) start = len + start;
  if (start < 0) start = 0;

  for (let i = start; i < len; i++) {
    if (arr[i] === searchElement) return true;
  }
  return false;
};
