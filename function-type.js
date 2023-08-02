"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `The world is save!`;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Jhon Doe'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
