export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const count = weakMap.get(endPoint);
  weakMap.set(endPoint, count ? count + 1 : 1);
  if (count && count + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
