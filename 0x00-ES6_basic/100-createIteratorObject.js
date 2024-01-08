export default function createIteratorObject(report) {
  return {
    ...report,
    [Symbol.iterator]() {
      let i = 0;
      const employeesNames = [];
      for (const dep of Object.values(this.allEmployees)) {
        for (const emp of dep) {
          employeesNames.push(emp);
        }
      }
      return {
        next() {
          if (i < employeesNames.length) {
            i += 1;
            return { done: false, value: employeesNames[i - 1] };
          }

          return { done: true, value: undefined };
        },
      };
    },
  };
}
