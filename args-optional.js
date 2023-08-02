"use strict";
() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
};
();
