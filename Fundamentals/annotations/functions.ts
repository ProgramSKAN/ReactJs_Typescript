//no type inference on arguments
//Type Inference works on return type but we won't use it to be sure about return type
const add = (a: number, b: number): number => {
  return a + b;
}

function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);

  //or
  // return null;
  // return undefined;
}

const throwError = (message: string): never => {//u never gonna reach the end of this fucntion
  throw new Error(message);
}

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
}

//----------------------------Destructuring with annotations--------------------------------------------
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

//ES2015
const logWeather1 = ({ date, weather }) => {//desctructuring
}
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}
logWeather(todaysWeather);

