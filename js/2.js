function* chunkArray(arr, size) {
  if (!Array.isArray(arr) || !arr.length) return [];

  if (!Number.isInteger(size) || size <= 0) throw new Error('size must be positive integer number')

  if (size >= arr.length) return arr;

  for (let i = 0; i < arr.length; i += size) {
    yield arr.slice(i, i + size);
  }
}
