class Vehicle {
  constructor(public color: string) { }

  protected honk(): void {//within th class and its subclass only
    console.log('beep');
  }
  //Access modifiers: public(default) , pivate, protected
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk();//error

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();