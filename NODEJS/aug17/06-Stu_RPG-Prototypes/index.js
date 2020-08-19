const BuildCharacter = function(name, profession, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function() {
        console.log(this);
    }
}

const ironman = new BuildCharacter("Iron Man", "An Iron Man", 100, 50, 500);
const batman = new BuildCharacter("Batman", "A Batman", 200, 25, 500);

BuildCharacter.prototype.IsAlive = function() {
    if(this.hp > 0) {
        console.log(`${this.name} is alive!`)
        return true;
    } else {
        console.log(`${this.name} is dead!`)
        return false;
    }
}

BuildCharacter.prototype.Attack = function(secondCharacter) {
    secondCharacter.hp -= this.strength
}

BuildCharacter.prototype.LevelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hp += 25;
}

do {
ironman.Attack(batman);
batman.Attack(ironman);
console.log("ironman: " + ironman.hp + " batman: " + batman.hp)
} while(batman.hp > 0 && ironman.hp)

