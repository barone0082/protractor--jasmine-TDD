

var home_page = function(){

	this.digitarTexto = function(value){
	
	element(by.model('person.name')).sendKeys(value);	
	};
	
	this.obterTextoDinamico =  function(){
		
		return element(by.binding('person.name')).getText();
	};
	
	this.btnContinuar = function(){
		
		
	element(by.linkText('Entre | Cadastre-se')).click();

		
		
	};
	
};

module.exports = new home_page();

