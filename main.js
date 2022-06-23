class Cars {
  constructor(NumberOfWheels, EngineCapacity, color) {
    this.NumberOfWheels = NumberOfWheels;
    this.EngineCapacity = EngineCapacity;
    this.color = color;
  }
  static object ([])
  returnCarsDetails() {
    return `color:${this.NumberOfWheels},Engine Capacity ${this.EngineCapacity},Number Of Wheels${this.NumberOfWheels}`;
  }
}
const details = new Cars(4, 1600, "red");
console.log(details);
class suv extends Cars {
  constructor(NumberOfWheels, EngineCapacity, color, name) {
    super(NumberOfWheels, EngineCapacity, color);
    this.name = name;
  }
  returnCarsDetails() {
    return `${super.returnCarsDetails()},${this.name}`;
  }
}
class Sport extends Cars {
  constructor(NumberOfWheels, EngineCapacity, color, name) {
    super(NumberOfWheels, EngineCapacity, color);
    this.name = name;
  }
  returnCarsDetails() {
    return `${super.returnCarsDetails()},${this.name}`;
  }


  get PrintNameInUppercase(){
    return this.myUppercase();
    
  }

  myUppercase() {
    return this.name.charAt(0).toUpperCase() +this.name.slice(1, length - 1) + this.name.charAt(this.name.length - 1).toUpperCase();
  }
}
class transit extends Cars {
  constructor(NumberOfWheels, EngineCapacity, color, name) {
    super(NumberOfWheels, EngineCapacity, color, name);
    this.name = name;
  }
  returnCarsDetails() {
    return `${super.returnCarsDetails()},${this.name}`;
  }
}

const daniel =new Sport( 2,1600,"red","avi").PrintNameInUppercase

console.log(daniel);