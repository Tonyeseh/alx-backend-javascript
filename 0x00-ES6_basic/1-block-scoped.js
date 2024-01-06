export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;
  
    if (trueOrFalse) {
      const task = true; // eslint-disable-line no-use-before-define
      const task2 = false; // eslint-disable-line no-use-before-define
    }
  
    return [task, task2];
  }