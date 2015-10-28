'use strict';

require('coffee-script/register');
var Util = require('../lib/util');

var dati = require('../data/nemici');
var Personaggio = require('../models/personaggio');
var Nemico = require('../models/nemico');
var nemici = Nemico.carica(dati);

var mioPersonaggio = Personaggio.Crea('nano');

var conteggioNemici = nemici.length;

var n = Util.NumeroCasuale(conteggioNemici);

var mioNemico = nemici[n];

console.log(`Combattimento tra ${mioPersonaggio.nome} e ${mioNemico.nome}...`);

console.log(mioNemico);

if (mioNemico.forza) {
	// Si combatte in forza

	var dado1 = Util.NumeroCasuale(6)+1;
	var dado2 = Util.NumeroCasuale(6)+1;

	var mioAttacco = mioPersonaggio.forza + dado1;
	var attaccoNemico = mioNemico.forza + dado2;

	console.log(`Il ${mioPersonaggio.nome} ha: ${mioPersonaggio.forza}+${dado1} = ${mioAttacco}`);

	console.log(`Il ${mioNemico.nome} ha: ${mioNemico.forza}+${dado2} = ${attaccoNemico}`);

	if (mioAttacco == attaccoNemico)
		console.log('STALLO!');
	else if (mioAttacco > attaccoNemico)
		console.log(`VINCE ${mioPersonaggio.nome}!`);
	else
		console.log(`VINCE ${mioNemico.nome}!`);

} else {
	// Si combatte in astuzia

	var dado1 = Util.NumeroCasuale(6)+1;
	var dado2 = Util.NumeroCasuale(6)+1;

	var mioAttacco = mioPersonaggio.astuzia + dado1;
	var attaccoNemico = mioNemico.astuzia + dado2;

	console.log(`Il ${mioPersonaggio.nome} ha: ${mioPersonaggio.astuzia}+${dado1} = ${mioAttacco}`);

	console.log(`Il ${mioNemico.nome} ha: ${mioNemico.astuzia}+${dado2} = ${attaccoNemico}`);

	if (mioAttacco == attaccoNemico)
		console.log('STALLO!');
	else if (mioAttacco > attaccoNemico)
		console.log(`VINCE ${mioPersonaggio.nome}!`);
	else
		console.log(`VINCE ${mioNemico.nome}!`);

}
