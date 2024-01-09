export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  const count = weakMap.get(endPoint);
  weakMap.set(endPoint, count ? count + 1 : 1);
  if (count && count >= 5) {
    throw new Error('Endpoing load is high');
  }
}
