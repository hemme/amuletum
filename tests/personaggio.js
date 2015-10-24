var assert = require('assert');

var Personaggio = require('../models/personaggio');

var base = new Personaggio();

console.log(Personaggio);

var n = Personaggio.Crea('nano');
console.log(n);

var a = Personaggio.Crea('assassino');
console.log(a);

var t = Personaggio.Crea('troll');
console.log(t);

var m = Personaggio.Crea('mago');
console.log(m);
