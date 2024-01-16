namespace Subjects {
    export class Subject implements Teacher {
        teacher: Subjects.Teacher;

        set setTeacher(teacher: Subjects.Teacher){
            this.teacher = teacher;
        };
    }
}