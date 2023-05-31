class Employee {
    constructor(hourlyRate, overtimeRate) {
      this.hourlyRate = hourlyRate;
      this.overtimeRate = overtimeRate;
      this.workingHours = 0;
    }
  
    addWorkingHours(hours) {
      this.workingHours += hours;
    }
  
    calculateSalary() {
      return this.hourlyRate * this.workingHours;
    }
  }
  
  class FulltimeEmployee extends Employee {
    constructor() {
      super(100000, 75000);
    }
  
    calculateSalary() {
      if (this.workingHours > 6) {
        return this.overtimeRate * this.workingHours;
      } else {
        return super.calculateSalary();
      }
    }
  }
  
  class ParttimeEmployee extends Employee {
    constructor() {
      super(50000, 30000);
    }
  
    calculateSalary() {
      if (this.workingHours > 6) {
        return this.overtimeRate * this.workingHours;
      } else {
        return super.calculateSalary();
      }
    }
  }
  
  // Example usage
  const fulltimeEmployee = new FulltimeEmployee();
  const parttimeEmployee = new ParttimeEmployee();
  
  fulltimeEmployee.addWorkingHours(8);
  parttimeEmployee.addWorkingHours(5);
  
  const fulltimeSalary = fulltimeEmployee.calculateSalary();
  const parttimeSalary = parttimeEmployee.calculateSalary();
  
  console.log("Full-time employee salary:", fulltimeSalary);
  console.log("Part-time employee salary:", parttimeSalary);
  