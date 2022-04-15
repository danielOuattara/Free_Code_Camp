const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
};

tekkenCharacter.origin = 'South Korea';
tekkenCharacter['hair color'] = 'dyed orange';
const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

console.log(tekkenCharacter)
console.table(tekkenCharacter)



let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27
// Only change code above this line

console.log(foods);