// An example configuration file.
exports.config = {
  directConnect: true,
  
    useAllAngular2AppRoots: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
	frameworks: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../spec/zoo_spec.js'],
  
 

  // Options to be passed to Jasmine.
 jasmineNodeOpts: {
	  showColors:true,
    defaultTimeoutInterval: 30000,
	 print: function() {},
    includeStackTrace : true,
    isVerbose : true
  },
  

  

};
