const carMakers = ['ford', 'toyota', 'chevy'];//type inference
const carMakers1: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];//Date[]

const carsByMake: string[][] = [
  ['f150'], ['corolla'], ['camaro']
];
const carsByMake1: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map','foreach','reduce'
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());