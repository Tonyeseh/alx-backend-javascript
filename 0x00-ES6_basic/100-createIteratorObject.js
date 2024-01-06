export default function createIteratorObject(report) {
    return {
        ...report,
        [Symbol.iterator] () {
            let i = 0;
            let employeesNames = []
            for (const dep of Object.values(this.allEmployees)) {
                for (const emp of dep) {
                    employeesNames.push(emp)
                }
            }
            return {
                next(){
                    if (i < employeesNames.length) {
                        i++;
                        return {done: false, value: employeesNames[i - 1]}
                    }
                    else {
                        return {done: true, value: undefined}
                    }
                }
            }
        }
    }
}