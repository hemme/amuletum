'use strict';

require('coffee-script/register');

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

var dati_nemici = require('./data/nemici');
var Nemico = require('./models/Nemico');
var carteNemici = Nemico.carica(dati_nemici);

elenca('Personaggi', schedePersonaggi);
elenca('Nemici', carteNemici);

function elenca(titolo, carte) {
	console.log('\r'+ titolo);
	for (var i = 0; i < carte.length; i++) {
	    var p =carte[i];
	    console.log( (i+1) + ') '+ p);
	}
}
