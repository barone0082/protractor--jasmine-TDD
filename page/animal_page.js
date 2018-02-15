var animal_page = function(){
	
	
	this.selecionarAnimal = function(index){
		
		 element(by.model('animal')).$('[value="'+index+'"]').click();
		
		
	};
	
	
	this.btnContinuarAnimal  = function(){
		
		
		element(by.buttonText('CONTINUE')).click();
	};
	
};

module.exports = new animal_page();
