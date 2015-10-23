'use strict';

class Nemico {
	constructor(nome, forza, astuzia, tipo){
		this.nome = nome;
		this.forza = forza;
		this.astuzia = astuzia;
		this.tipo = tipo;
	}

	toString() {
		return  this.forza!==undefined
			? `${this.nome} (${this.tipo}, fo:${this.forza})`
			: `${this.nome} (${this.tipo}, as:${this.astuzia})`;
	}

	static carica(dati) {
		var lista = [];
		dati.forEach(d => {
			d.lista.forEach(s => {
				lista.push(new Nemico(s.nome, s.forza, s.astuzia, d.tipo));
			})
		});
		return lista;
	}
}

module.exports = Nemico;
