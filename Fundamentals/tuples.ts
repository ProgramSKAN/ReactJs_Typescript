const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];//tuple
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

// pepsi[0]=40;//error

const carStats = {
  horsepower: 400,
  weight: 3354
};


//you can only know type in tuple not what value means like 'color'. so objects are more used than tuple