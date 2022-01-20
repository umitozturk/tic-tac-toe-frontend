
export function boardPlace(position, cells) {
  let result = '';
  cells.forEach((cell, index) => {
    if (cell.className.includes(position)) {
      result = index;
    }
  });

  return result;
}
