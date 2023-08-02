"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisignal ativated!!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returnName();
})();
