class Employee {
    constructor(){
        this.employeeName;
    }
    getEmployeeName(){
        return this.employeeName;
    }
    setEmployeeName(newEmployeeName){
        if (typeof newEmployeeName!=="string"){
            throw new Error("Nama harusnya string")
        }
        this.employeeName = newEmployeeName;
    }
}
const employee = new Employee();
employee.employeeName = "Peter"
console.log ("Before ", employee);
employee.setEmployeeName("Parker"); // ini untuk menampilkan hanya parker
console.log ("After ",employee);
// console.log (employee.getEmployeeName());