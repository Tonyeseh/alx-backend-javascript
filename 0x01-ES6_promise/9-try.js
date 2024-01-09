export default function guardrail(mathFunction) {
  const resultArray = [];
  try {
    resultArray.push(mathFunction());
  } catch (error) {
    resultArray.push(error.toString());
  } finally {
    resultArray.push('Guardrail was processed');
  }
  return resultArray;
}
