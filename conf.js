exports.config = {
	    framework: 'jasmine',
        seleniumAddress: 'http://localhost:4444/wd/hub',

        //'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',

        specs: ['test4.js'],
        //allScriptsTimeout: 20000,

         // Run local

        'capabilities': {

          'browserName': 'Chrome'
         },



        /* run on Browser Stack
        'capabilities': {

        'browserstack.user': 'mcarlotta',
        'browserstack.key': 'r8ueZnPbuGXi6BpMx8vn',
        'browserName': 'EDGE'
        
        },*/
       
       
         //Run for Android
         /*
          capabilities: {
            browserName: 'chrome',
            platformName: 'Android',
            platformVersion: '7.0',
            deviceName: 'Android Emulator',
          },
*/
        jasmineNodeOpts: { defaultTimeoutInterval: 260000 } }

       
         // Options to be passed to Jasmine.
         
        /*
        'capabilities': {
         'browserstack.user': 'mcarlotta',
         'browserstack.key' : 'r8ueZnPbuGXi6BpMx8vn',
   			 'os': 'OS X',
         'os_version': 'Sierra',
         'browserName': 'Safari',
         'browser_version': '7.1',
         'resolution': '1024x768'
  		}
  		*/
       
