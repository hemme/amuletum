'use strict';

class Util {
	static NumeroCasuale(max){
		return Math.trunc(Math.random()*max);
	}

	static toString(card)
	{
		return `${card.nome} (fo:${card.forza}, as:${card.astuzia}, vi:${card.vita}, fa:${card.fato})`;
	}
}

module.exports = Util;
