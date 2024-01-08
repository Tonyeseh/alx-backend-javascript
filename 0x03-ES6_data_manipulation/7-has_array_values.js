export default function hasValuesFromArray(set, array) {
  let boolHas = true;
  array.forEach((elem) => {
    if (!set.has(elem)) {
      boolHas = false;
    }
  });
  return boolHas;
}
