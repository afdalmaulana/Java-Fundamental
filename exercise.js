class Employee {
    constructor (gajiKerja, gajiLembur){
        this.gajiKerja = gajiKerja;
        this.gajiLembur = gajiLembur;
        this.jamKerja = 0;
    }
    hitungjamKerja(jam){
        this.jamKerja += jam;
    }
    hitungGaji(){
        return this.gajiKerja * this.jamKerja;
    }
}
class FulltimeEmployee extends Employee{
    constructor(){
        super(100000, 75000);
    }
    hitungGaji(){
        if(this.jamKerja > 6){
            return this.gajiLembur * this.jamKerja;
        }else{
            return super.hitungGaji();
        }
    }

}
class ParttimeEmployee extends Employee{
    constructor(){
        super(50000, 30000);
    }
    hitungGaji(){
        if(this.jamKerja > 6){
            return this.gajiLembur * this.jamKerja;
        } else { 
            return super.hitungGaji();
        }
    }
}
const fulltimeEmployee = new FulltimeEmployee();
const parttimeEmployee = new ParttimeEmployee();

const fulltimeSalary = fulltimeEmployee.hitungGaji();
const parttimeSalary = parttimeEmployee.hitungGaji();

fulltimeEmployee.hitungjamKerja((8));
parttimeEmployee.hitungjamKerja((5));
console.log(`Gaji Fulltime : ${fulltimeSalary}`);
console.log(`Gaji Parttime : ${parttimeSalary}`);