'use strict';

var mustache

class Personaggio {
	constructor(nome, forza, astuzia, vita, fato) {
		this.nome = nome;
		this.forza = forza;
		this.astuzia = astuzia;
		this.vita = vita;
		this.fato = fato;
	}

	static Crea(nome) {
		var d = data.find(x => x[0] === nome);
		return d ? new Personaggio(nome, d[1], d[2], d[3], d[4]) : new Personaggio();
	}

	toString() {
		return `${this.nome} (fo:${this.forza}, as:${this.astuzia}, vi:${this.vita}, fa:${this.fato})`;
	}

	static toString(card)
	{
		return
	}
}

var data = [
	['nano', 3, 3, 5, 5],
	['druido', 2, 4, 4, 4],
	['elfo', 3, 4, 4, 3],
	['troll', 6, 1, 6, 1],
	['ghoul', 2, 4, 4, 4],
	['assassino', 3, 3, 4, 3],
	['mago', 2, 5, 4, 3],
	['monaco', 2, 3, 4, 5],
	['prete', 2, 4, 4, 5],
	['ladro', 3, 3, 4, 2],
	['profetessa', 2, 4, 4, 2],
	['incantatrice', 2, 4, 4, 3],
	['menestrello', 2, 4, 4, 5],
	['guerriero', 4, 2, 5, 1]
];

module.exports = Personaggio;
