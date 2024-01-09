export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  try {
    dataView.setUInt8(position, value);
  } catch (error) {
    return new Error('Position outside range');
  }

  return dataView;
}
