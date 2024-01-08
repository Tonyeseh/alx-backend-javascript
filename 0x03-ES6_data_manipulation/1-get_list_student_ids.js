export default function getListStudentIds(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.map((elem) => elem.id);
  }
  return [];
}
