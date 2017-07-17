//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype

function Dog(name, color, status, hungry = true, owner) {
    this.name = name;
    this.color = color;
    this.status = status;
    this.hungry = hungry;
    this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

var sadie = new Dog('sadie', 'black', 'normal', false);
var moonshine = new Dog('moonshine');
var atticus = new Dog('atticus');

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype

function Human(name, cool = true) {
    this.name = name;
    this.cool = cool;
}

Human.prototype.pet = function(Dog) {
    Dog.status = 'happy';
}

Human.prototype.feed = function(Dog) {
    Dog.hungry = false;
}

// Instances of Human
// Needed: mason, julia

var mason = new Human('mason', false);
var julia = new Human('julia', true);