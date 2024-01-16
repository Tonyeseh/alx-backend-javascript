/// <reference path="./Subject.ts" />
namespace Subjects{
    export interface Teacher {
        experienceTeachingC?: number;
    }

    class Cpp extends Subject {
         getRequirements() {
            return "Here is the list of requirements for Cpp"
        }
        getAvailableTeacher() {
            if (this.experienceTeachingC){
            return `Available Teacher: ${this.firstName}`
            }
            return "No available teacher"
        }
    }
}
