'use strict';

require('coffee-script/register');

var dati = require('../data/nemici');
var Nemico = require('../models/nemico');

var nemici = Nemico.carica(dati);
nemici.forEach(n => console.log(n.toString()));
