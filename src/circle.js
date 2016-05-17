export class Circle{
  constructor(radius){
    this.radius = radius;
    Circle.circlesMade++;
  }

  static get circlesMade(){
    return !this._count ? 0 : this._count;
  }

  static set circlesMade(val){
    this._count = val;
  }

  static draw(circle, canvas){
    console.log('Drawing a circle of radius ', circle.radius, ' on canvas');
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  get radius(){
    return this._radius;
  }

  set radius(val){
    if(!Number.isInteger(val)){
      throw new Error('Radius must be an Integer');
    }
    this._radius = val;
  }
}