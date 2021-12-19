module.exports.compareIds = (arr) => {
  let isInArray = true;
  while (isInArray) {
    const rand = Math.floor(Math.random() * 90000) + 10000;
    isInArray = arr.resIds.includes(rand);
    if (!isInArray) return rand;
  }
};
