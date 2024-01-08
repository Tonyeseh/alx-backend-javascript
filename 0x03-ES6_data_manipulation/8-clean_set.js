export default function cleanSet(set, startString) {
  const array = [];

  Array.from(set).forEach((elem) => {
    if (startString !== '' && elem.startsWith(startString)) {
      const newElem = elem.slice(startString.length);
      array.push(newElem);
    }
  });

  return array.join('-');
}
