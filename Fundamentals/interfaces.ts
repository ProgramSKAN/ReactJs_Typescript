interface Reportable {
  summary(): string;
}
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

//without interface its long
const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken)
}
//with interface
const printVehicle1 = (vehicle: Vehicle): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken)
}
printVehicle1(oldCivic);

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

//with interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);