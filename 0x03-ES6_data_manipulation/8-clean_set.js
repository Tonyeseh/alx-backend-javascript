export default function cleanSet(set, startString) {
  if (typeof startString === 'string' && startString !== '') {
    const array = Array.from(set);
    const array1 = array.filter((elem) => typeof elem === 'string' && elem.startsWith(startString));
    const array2 = array1.map((elem) => elem.slice(startString.length));
    return array2.join('-');
  }

  return '';
}
