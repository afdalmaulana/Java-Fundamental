class ShootingGame {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    getRandomitem(){
        const randomItem = Math.round(Math.random()*3)
        // console.log (randomItem);
        let healthPlus = 0;
        let powerPlus = 0;
        if(randomItem == 0 || randomItem == 3){
            healthPlus, powerPlus;
        } else if (randomItem == 1){
            healthPlus = 10;
        } else if (randomItem == 2){
            powerPlus = 10;
        }
        return {
            h : healthPlus,
            p : powerPlus
        }
    }
    start(){
            while (this.player1.health > 0 && this.player2.health){
            console.log ("Game Start");
            this.player1.showStatus();
            this.player2.showStatus();

            let player1Item = this.getRandomitem();
            let player2Item = this.getRandomitem();
            console.log (player1Item);
            console.log (player2Item);

            this.player1.useItem(player1Item);
            this.player1.showStatus();
            this.player2.useItem(player2Item);
            this.player2.showStatus();

            console.log ("Shooting")
            this.player1.hit(this.player2.power)
            this.player1.showStatus();
            this.player2.hit(this.player1.power)
            this.player2.showStatus();
        }
        if(this.player1.health > this.player2.health){
            console.log(`${this.player1.name} Win`);
        } else if (this.player2.health > this.player1.health){
            console.log(`${this.player2.name} Win`);
        } else if(this.player1.health < 0 && this.player2.health <0){
            console.log ("Draww");
        }
    }
}
class Player {
    constructor(name, health = 100, power = 10){
        this.name = name;
        this.health = health;
        this.power = power;
    }
    hit(power){
        this.health -= power;
    }
    useItem(item){
        this.health += item.h; item["h"] // ada dua cara mengakses value pada object, yaitu dengan (.) dan kurung siku [] => kalau key/propertynya string maka dalam kurung siku di tambahkan petik ("")
        this.power += item.p; // mengakses array of object pada getRandomItem(); makanya mengakses valuenya dengan cara memanggil objectnya
    }
    showStatus(){
        console.log(`${this.name} Health : ${this.health} Power : ${this.power}`);

    }
}

const player1 = new Player("JinX_Pro");
const player2 = new Player("EvoS_Chill");
// player1.showStatus();
const game = new ShootingGame(player1,player2);

game.start();