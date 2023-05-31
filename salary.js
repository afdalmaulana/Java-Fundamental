class Pegawai {
    constructor(gajiKerja, gajiLembur){
        this.gajiKerja = gajiKerja;
        this.gajiLembur = gajiLembur;
        this.normalTime = 6;
        this.jamKerja = 0;
    }
    
    waktuKerja(n){
        if(n <= 0){
             console.log("Ga Kerja");
        } else {
            this.jamKerja += n;
        }
        console.log(`Jam Kerja : ${this.jamKerja}`);
    }
    hitungGaji(){
        if(this.jamKerja <= this.normalTime){
            console.log (this.gaji * this.jamKerja);
        } else {
            console.log((this.normalTime * this.gajiKerja) + (this.jamKerja - this.normalTime) * this.gajiLembur);
        }
    }
}
class PegawaiFulltime extends Pegawai{
    constructor(gajiKerja,gajiLembur){
        super(gajiKerja,gajiLembur);
    }
}
class PegawaiParttime extends Pegawai {
    constructor(gajiKerja,gajiLembur){
        super(gajiKerja,gajiLembur);
    }
}

const fullTime = new PegawaiFulltime(100000,75000);
const partTime = new PegawaiParttime(50000,30000);
fullTime.waktuKerja(7);
fullTime.hitungGaji();
partTime.waktuKerja(8);
partTime.hitungGaji();