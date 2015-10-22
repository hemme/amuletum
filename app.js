'use strict';

var Personaggio = require('./models/Personaggio');
var Util = require('./lib/Util');

let schedePersonaggi = [
    Personaggio.Crea('nano'),
    Personaggio.Crea('mago'),
    Personaggio.Crea('monaco'),
    Personaggio.Crea('troll'),
    Personaggio.Crea('assassino'),
    Personaggio.Crea('prete'),
    Personaggio.Crea('druido'),
    Personaggio.Crea('ladro'),
    Personaggio.Crea('profetessa'),
    Personaggio.Crea('ghoul'),
    Personaggio.Crea('incantatrice'),
    Personaggio.Crea('menestrello'),
    Personaggio.Crea('elfo'),
    Personaggio.Crea('guerriero')
];

for (var i = 0; i < schedePersonaggi.length; i++) {
    var p = schedePersonaggi[i];
    console.log( (i+1) + ') '+ p);
}
