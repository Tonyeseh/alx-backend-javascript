export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  let count = weakMap.get(endPoint);
  if (count && count >= 5) {
    throw new Error('Endpoing load is high');
  }
  weakMap.set(endPoint, count ? count += 1 : 1);
}
