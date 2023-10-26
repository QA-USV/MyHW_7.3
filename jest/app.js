/* eslint-disable linebreak-style */

function sortByName(inputArray) {
  inputArray.sort((a, b) => {
    const nameA = a.toLowerCase();
    const nameB = b.toLowerCase();
    if (nameA < nameB)
    // сортируем названия по возрастанию
    { return -1; }
    if (nameA > nameB) return 1;
    return 0; // нет сортировки
  });
  return inputArray;
}

exports.sortByName = sortByName;
