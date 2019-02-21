'use strict';

function createCharacter(Name, Nickname, Race, Origin, Weapon, Attack, Defense)
{
  return {
    Name, Nickname, Race, Origin, Weapon, Attack, Defense,
    describe: function() {
      console.log(`${this.Name} is a ${this.Race} of the ${this.Origin} who uses a ${this.Weapon}.`);
    },

    evaluateFight: function(opponent){
      let opponentDamage = this.Attack - opponent.Defense;
      let yourDamage = opponent.Attack-this.Defense;

      if(opponentDamage < 0)
      {
        opponentDamage = 0;
      }
                
      if(yourDamage < 0)
      {
        yourDamage = 0;
      }

      return `Your opponent takes ${opponentDamage} damage and you receive ${yourDamage} damage`;
            
    }


  };

}

const LOTR = createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth','wizard staff', 10,6);

const LOTR2 = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit','The Shire','the ring', 2,1);

console.log(LOTR.evaluateFight(LOTR2));
console.log(LOTR.describe());

const charArr = [createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth','wizard staff', 10,6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit','The Shire','the ring', 2,1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit','The Shire','String and Barrow Blade', 3,2),
  createCharacter('Aragon son of Arathorn', 'aragorn', 'Man','Dunnedain','Anduril', 6,8),
  createCharacter('Legolas', 'legolas', 'Elf','Woodland Realm','Bow and Arrow', 8,5),
  createCharacter('Arwen Undomiel', 'Awe', 'Half-Elf','Rivendell','Hadhafang', 9,2)
];

let charFind = charArr.find(function(element){
  return element.Nickname === 'aragorn';
}
);


let hobbitFind = charArr.filter(function(element){
  return element.Race === 'Hobbit';
    
});

let attackFind = charArr.filter(function(element){
  return element.Attack > 5;
     
});

 