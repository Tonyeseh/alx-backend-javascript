export default function iterateThroughObject(reportWithIterator) {
    let employeesNamesList = []
    for (const emp of reportWithIterator) {
        employeesNamesList.push(emp)
    }

    return employeesNamesList.join(' | ')
}