(() => {

  const a:number = 10;

  console.log( a );

  let name:string = 'John Doe';
  console.log(name);

  let world = 'world';
  console.log( ( world as string ).charAt(0));
  
  let age = 23;
  console.log( (<number>age).toFixed(2) );
  
  let isActive:boolean = false;
  console.log( isActive );
  
  // const numbers: (string | number | boolean)[] = [ 1, 2, 3, 4, '5', 6 ];
  const numbers:number[] = [ 1, 2, 3, 4, 5, 6 ];
  console.log( numbers );

  // Tuples
  const hero: [string, number] = ['Dr Strnge', 100];
  hero[0] = 'hello';

  // Enums
  enum AudioLevel {
    min,
    medium,
    max
  } 

  let currentLevel = AudioLevel.medium;
  console.log(currentLevel);
  
  // Never
  const asd = (message:string):never => {
    throw new Error( message )
  } 

  asd('Helpme!!!');

  // Null and undefined
  let nothing:undefined = undefined;

  console.log(nothing);

  
  






})();
