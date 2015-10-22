var assert = require('assert');

var Personaggio = require('personaggio');

var base = new Personaggio();

console.log(Personaggio);

var n = Personaggio.CreaNano('Nano');
console.log(n);

var a = Personaggio.CreaAssassino('Assassino');
console.log(a);

var t = Personaggio.CreaTroll('Troll');
console.log(t);

var m = Personaggio.CreaMago('Mago');
console.log(m);
