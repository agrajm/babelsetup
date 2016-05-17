
// Constructor Function
function Circle(radius){
  this.radius = radius;
  Circle.circlesMade++;
}

// Static Method
Circle.draw = function(circle, canvas){
  console.log('draw circle on this canvas ',canvas);
}

// Method on Prototype -- instance method
Circle.prototype = {
  area: function(){
    return 3.14 * this.radius * this.radius;
  }
}

// Static property
Object.defineProperty(Circle, 'circlesMade', {

  get: function(){
    return !this._count ? 0 : this._count;
  },

  set: function(count){
    this._count = count;
  }

});

// radius defined on Prototype -- so every instance of circle has it 
Object.defineProperty(Circle.prototype, 'radius', {

  get: function(){
    return this._radius;
  },

  set: function(val){
    if(!Number.isInteger(val)){
      throw new Error('Radius must be set to a Integer');
    }
    this._radius = val;
  }
});