class Employee {
    constructor(gajiKerja, gajiLembur){
        this.gajiKerja = gajiKerja;
        this.gajiLembur = gajiLembur;
        this.jamKerja = 0;
    }
    hitungGaji(){
        return this.gajiKerja * this.jamKerja;
    }
    hitungJamkerja(jam){
        this.jamKerja += jam;
    }
}
class FulltimeEmployee extends Employee{
    constructor(){
        super(100000,75000);
    }
    hitungGaji(){
        if(this.jamKerja > 6){
            return (this.gajiLembur * (this.jamKerja-6)) + (this.gajiKerja * 6);
        } else {
            return super.hitungGaji();
        }
    }
}
class ParttimeEmployee extends Employee {
    constructor(){
        super(50000, 30000);
    }
    hitungGaji(){
        if (this.jamKerja > 6){
            return (this.gajiLembur * (this.jamKerja - 6) + (this.gajiKerja * 6));
        } else {
            return super.hitungGaji();
        }
    }
}
const fullTime = new FulltimeEmployee();
const partTime = new ParttimeEmployee();
fullTime.hitungJamkerja(8);
partTime.hitungJamkerja(5);
const gajiFulltime = fullTime.hitungGaji();
const gajiParttime = partTime.hitungGaji();
console.log (`Gaji Full time : ${gajiFulltime}`);
console.log (`Gaji Part time : ${gajiParttime}`);