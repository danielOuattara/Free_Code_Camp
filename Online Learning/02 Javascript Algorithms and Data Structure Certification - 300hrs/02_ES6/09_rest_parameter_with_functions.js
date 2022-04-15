const sum = (...args) => {
  const item = [...args];
  return item.reduce((a, b) => a + b, 0);
}

console.log(sum(0, 1, 2))