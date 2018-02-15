var thankyou_page = function(){
	
	
	this.mensagemObrigado = function(){
		
		return element(by.id("title")).getText();
		
	};
	
	
};

module.exports = new thankyou_page();