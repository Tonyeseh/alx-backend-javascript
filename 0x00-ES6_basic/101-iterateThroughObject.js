export default function iterateThroughObject(reportWithIterator) {
  const employeesNamesList = [];
  for (const emp of reportWithIterator) {
    employeesNamesList.push(emp);
  }

  return employeesNamesList.join(' | ');
}
