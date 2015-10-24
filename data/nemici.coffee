nemici = [
	{
		tipo: 'animale'
		lista: [{
			nome: 'orso'
			forza:3
		},{
			nome: 'leone'
			forza:3
		},{
			nome: 'serpente'
			forza:4
		},{
			nome: 'cinghiale'
			forza:1
		},{
			nome: 'lupo'
			forza:2
		}]
	},{
		tipo:'mostro',
		lista: [
			{
				nome: 'bandito'
				forza:4
			},{
				nome: 'gigante'
				forza:6
			},{
				nome: 'orco'
				forza:5
			},{
				nome: 'goblin'
				forza:2
			},{
				nome: 'hobgoblin'
				forza:3
			}
		]
	},{
		tipo: 'spirito'
		lista : [
			{
				nome: 'apparizione'
				astuzia:5
			},{
				nome: 'ombra'
				astuzia:2
			},{
				nome: 'lemure'
				astuzia:1
			},{
				nome: 'demone'
				astuzia:10
			}
		]
	},{
		tipo: 'drago'
		lista : [
			{
				nome: 'drago'
				forza: 7
			}
		]
	}
]
module.exports = nemici
