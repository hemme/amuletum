'use strict';

class Oggetto {
	constructor(nome, effetto, limite, tipo) {
		this.nome = nome;
		this.effetto = effetto;
		this.limite = limite;
		this.tipo = tipo;
	}

	toString() {
		var testoEffetto = JSON.stringify(this.effetto);
		var testoLimite =  JSON.stringify(this.limite);
		return this.limite
			?  `${this.nome} (${this.tipo}, ${testoEffetto} - ${testoLimite})`
			: `${this.nome} (${this.tipo}, ${testoEffetto})`
	}

	static carica(dati) {
		var lista = [];
		dati.forEach(d => {
			d.lista.forEach(s => {
				lista.push(new Oggetto(s.nome, s.effetto, s.limite, d.tipo));
			})
		});
		return lista;
	}
}

module.exports = Oggetto;
