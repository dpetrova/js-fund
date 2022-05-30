/* Behavioral Design Patterns */
//Behavioral Design Patterns are specifically concerned with communication between objects.

/* Chain of Responsibility */
//It creates a chain of objects. Starting from a point, it stops until it finds a certain condition.

//We will be using an example of a game having a creature.
//The creature will increase its defense and attack when it reaches a certain point.
//It will create a chain and attack and defense will increase and decrease.

class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}

class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null;
  }
  add(modifier) {
    if (this.next) this.next.add(modifier);
    else this.next = modifier;
  }
  handle() {
    if (this.next) this.next.handle();
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }
  handle() {
    console.log("No bonuses for you!");
  }
}

//increase attack
class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }
  handle() {
    console.log(`Double ${this.creature.name}'s attack`);
    this.creature.attack *= 2;
    super.handle();
  }
}

//increase defense
class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }
  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increase ${this.creature.name}'s defense`);
      this.creature.defense++;
    }
    super.handle();
  }
}

//That’s how we will use this
let peekachu = new Creature("Peekachu", 1, 1);
console.log(peekachu.toString());

let root = new CreatureModifier(peekachu);
root.add(new DoubleAttackModifier(peekachu));
root.add(new IncreaseDefenseModifier(peekachu));
root.handle();
console.log(peekachu.toString());
