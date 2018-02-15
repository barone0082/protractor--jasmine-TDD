var util = require ('util')

var home_page = require('../page/home_page.js');
var animal_page = require ('../page/animal_page.js');
var thankyou_page = require ('../page/thankyou_page.js');
beforeEach(function(){
	
	browser.get("http://www.thetestroom.com/jswebapp/");
	
});
	


describe("fazendo caso de teste do zoo utilizando o conceito de page object",function(){
	
	it("adiciono um valor qualquer ao campo e em seguida valido o seu valor",function(){
		
		console.log("Adicionando valor qualquer ao campo e em seguida valido o seu valor ")
		home_page.digitarTexto('ufgwcj');
		var verificarTexto = home_page.obterTextoDinamico();
		expect(verificarTexto).toBe('ufgwcj');
		home_page.btnContinuar();
		
		animal_page.selecionarAnimal(2);
		animal_page.btnContinuarAnimal();
		
		var verificaMsg = thankyou_page.mensagemObrigado();
		
		expect(verificaMsg).toBe('Thank you');
	});	
});
	