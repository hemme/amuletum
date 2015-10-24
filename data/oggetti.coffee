oggetti = [
	 {
		 tipo: 'oggetto magico'
		 lista: [
			 {
				 nome: 'Cintura magica'
				 effetto:
					 forza: +1
			 },{
				 nome:'Corona di Salomone'
				 effetto:
					 astuzia: +2
			},{
				nome:'Anello'
				effetto:
					forza: +1
					astuzia: +1
		   },
		 ]
	 },{
		 tipo: 'oggetto'
		 lista: [
			 {
				 nome: 'Ascia'
				 effetto:
					 forza: +1
				limite:
					combattimento: true
			 },{
				 nome: 'Spada'
				 effetto:
					 forza: +1
				limite:
					combattimento: true
			 },
			 {
				 nome:'Borsa d\'oro'
				 effetto:
					 oro: +1
			 },{
				 nome:'Due borse d\'oro'
				 effetto:
					 oro: +2
			 }
		 ]
	 }
]

module.exports = oggetti
