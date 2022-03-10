function solution(numbers) {
  const matchDigithAndSort = numbers
    .map((el, i) => {
      return String(el).repeat(4);
    })
    .sort()
    .reverse();

  const resetDigith = matchDigithAndSort.map((el) => {
    return el.slice(0, el.length / 4);
  });
  const result = resetDigith.join('');
  return result[0] === '0' ? '0' : result;
}
