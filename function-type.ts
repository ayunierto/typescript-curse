(() => {
   
  const addNumber = (a:number, b:number) => a + b;  
  const greet = (name:string ) => `Hola ${name}`;
  const saveTheWorld = () => `The world is save!`;

  let myFunction: (x:number, y:number) => number;

  // myFunction = 10;
  // console.log(myFunction);

  myFunction = addNumber;
  console.log(myFunction(1,2));

  myFunction = greet;
  console.log(myFunction('Jhon Doe'));
   
  myFunction = saveTheWorld;
  console.log(myFunction());
   

  
})()
