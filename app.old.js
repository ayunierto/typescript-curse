"use strict";
(() => {
    const a = 10;
    console.log(a);
    let name = 'John Doe';
    console.log(name);
    let world = 'world';
    console.log(world.charAt(0));
    let age = 23;
    console.log(age.toFixed(2));
    let isActive = false;
    console.log(isActive);
    // const numbers: (string | number | boolean)[] = [ 1, 2, 3, 4, '5', 6 ];
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log(numbers);
    // Tuples
    const hero = ['Dr Strnge', 100];
    hero[0] = 'hello';
    // Enums
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentLevel = AudioLevel.medium;
    console.log(currentLevel);
    // Never
    const asd = (message) => {
        throw new Error(message);
    };
    asd('Helpme!!!');
    // Null and undefined
    let nothing = undefined;
    console.log(nothing);
})();
