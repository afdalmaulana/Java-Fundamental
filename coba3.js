function mergeStudentData(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2];
    const uniqueArr = [];
  
    mergedArr.forEach((student) => {
      const existingStudent = uniqueArr.find((s) => s.id === student.id);
      if (!existingStudent) {
        uniqueArr.push(student);
      }
    });
  
    return uniqueArr;
  };
  let student1 = [
    {
        name : "Student 1",
        email : "student1@gmail.com"
    },
    {
        name : "Student 2",
        email : "student2@gmail.com"
    }
];
let student2 = [
    {
        name : "Student 1",
        email : "student1@gmail.com"
    },
    {
        name : "Student 3",
        email : "student3@gmail.com"
    }
];
let x = mergeStudentData(student1,student2);
console.log(x);