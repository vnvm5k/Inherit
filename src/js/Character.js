export default class Character {
  constructor(name, type) {
    const arrName = name.split('');
    const arrType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    const typeCheck = arrType.find((element) => element === type);
    if ((arrName.length < 2 || arrName.length > 10) || !typeCheck) throw new Error('Некорректное значение');
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = '';
    this.defence = '';
  }

  levelUp() {
    if (this.health <= 0) throw new Error('нельзя повысить левел умершего');
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
