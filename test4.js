describe('opendisplay homepage login', function() {

     var fs = require('fs');

    
    
   it('Displays elements', function(done) {
    browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 

     //Display the Sign in  Sugn Up Links
    expect(element(by.partialLinkText("Sign In")).isDisplayed()).toBeTruthy();
    expect(element(by.css('.nav-link.p-b-10.m-t-n-5.m-r-15>b')).isDisplayed()).toBeTruthy();
    
    //Display the Sign in Label
    expect(element(by.css('.box-title.m-b-20.text-center.fs-18')).isDisplayed()).toBeTruthy();

    //Display  fields and buttons
     expect(element(by.name('user_email')).isDisplayed()).toBeTruthy();
     expect(element(by.name('user_password')).isDisplayed()).toBeTruthy();
     expect(element(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).isDisplayed()).toBeTruthy();

     //Display  forgot password link
     expect(element(by.partialLinkText("Forgot password?")).isDisplayed()).toBeTruthy();

     //Display  Sign Up link
     expect(element(by.css(".hidden-xs>b")).isDisplayed()).toBeTruthy();

     //Display bottomLink
    expect(element(by.partialLinkText("About")).isDisplayed()).toBeTruthy();
    expect(element(by.partialLinkText("Careers")).isDisplayed()).toBeTruthy();
    expect(element(by.partialLinkText("Privacy Policy")).isDisplayed()).toBeTruthy();
    expect(element(by.css('.pull-right>li')).isDisplayed()).toBeTruthy();

    done();
  });

   it('Click on elements', function(done) {
    browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 

     //Click the Sign in  Sign Up Links on top Menu
    // browser.driver.findElement(by.partialLinkText('Sign In')).click();
    // browser.sleep(3000);
    // browser.navigate().back();

    //Click the Sign in  Sign Ip Links on top Menu
     browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
     browser.driver.findElement(by.partialLinkText('Sign Up')).click();
     browser.sleep(3000);
     browser.navigate().back();

     //Click the Forgot Pass Link
     browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
     browser.driver.findElement(by.partialLinkText('Forgot password')).click();
     browser.sleep(3000);
     browser.navigate().back();
    done();
  });
   
 it('Login and Pass its empty', function(done) {
    //Click the Sign in  Sign Ip Links on top Menu
     browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
     
     // Verify elements are displayed
     expect(element(by.name('user_email')).isDisplayed()).toBeTruthy();
     expect(element(by.name('user_password')).isDisplayed()).toBeTruthy();
     expect(element(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).isDisplayed()).toBeTruthy();

     browser.driver.findElement(by.name('user_email')).clear;
     browser.driver.findElement(by.name('user_password')).clear;
     browser.driver.findElement(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).click();

     var required=(element(by.css('.control-label.has-error.validationMessage')))
     expect(required.getText()).toEqual('Required');

        browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'loginpassempty.png');
    });


    done();
  });

it('Login its empty', function(done) {
    //Click the Sign in  Sign Ip Links on top Menu
     browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
     
     // Verify elements are displayed
     expect(element(by.name('user_email')).isDisplayed()).toBeTruthy();
     expect(element(by.name('user_password')).isDisplayed()).toBeTruthy();
     expect(element(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).isDisplayed()).toBeTruthy();

     browser.driver.findElement(by.name('user_email')).clear;
     browser.driver.findElement(by.name('user_password')).clear;
     browser.driver.findElement(by.name('user_password')).sendKeys('123456');
     browser.driver.findElement(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).click();

     var required=(element(by.css('.control-label.has-error.validationMessage')))
     expect(required.getText()).toEqual('Required');

        browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'login_its_empty.png');
    });


    done();
  });
  

  it('Password its empty', function(done) {
    //Click the Sign in  Sign Ip Links on top Menu
     browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
     
     // Verify elements are displayed
     expect(element(by.name('user_email')).isDisplayed()).toBeTruthy();
     expect(element(by.name('user_password')).isDisplayed()).toBeTruthy();
     expect(element(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).isDisplayed()).toBeTruthy();

     browser.driver.findElement(by.name('user_email')).clear;
     browser.driver.findElement(by.name('user_password')).clear;
     browser.driver.findElement(by.name('user_email')).sendKeys('denny@adsemble.com');
     browser.driver.findElement(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).click();

     var required=(element(by.css('.control-label.has-error.validationMessage')))
     expect(required.getText()).toEqual('Required');

        browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'password_its_empty.png');
    });


    done();
  });

  /*

   it('Login y Password wrong', function(done) {
    //Click the Sign nin  Sign Ip Links on top Menu
     browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
     
     // Verify elements are displayed
     expect(element(by.name('user_email')).isDisplayed()).toBeTruthy();
     expect(element(by.name('user_password')).isDisplayed()).toBeTruthy();
     expect(element(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).isDisplayed()).toBeTruthy();

     browser.driver.findElement(by.name('user_email')).clear;
     browser.driver.findElement(by.name('user_password')).clear;
     browser.driver.findElement(by.name('user_email')).sendKeys('userwrong@adsemble.com');
     browser.driver.findElement(by.name('user_password')).sendKeys('userwrong@adsemble.com');
     browser.driver.findElement(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).click();

    //.alert.alert-danger.alert-dismissible.alertIn.alertOut
    
    //fa fa-exclamation-circle ng-scope
     //var required=(element(by.css('alert.alert-danger.alert-dismissible.alertIn.alertOut')));
    // expect(required.getText()).toEqual('Required');

        browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'password_its_empty.png');
    });


    done();
  });

*/
    it('Login and Password are OK', function(done) {
        //Click the Sign nin  Sign Ip Links on top Menu
         browser.driver.get('https://dev-opendisplay.adsemble.com/login'); 
         
         // Verify elements are displayed
         expect(element(by.name('user_email')).isDisplayed()).toBeTruthy();
         expect(element(by.name('user_password')).isDisplayed()).toBeTruthy();
         expect(element(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).isDisplayed()).toBeTruthy();

         browser.driver.findElement(by.name('user_email')).clear;
         browser.driver.findElement(by.name('user_password')).clear;
         browser.driver.findElement(by.name('user_email')).sendKeys('denny@adsemble.com');
         browser.driver.findElement(by.name('user_password')).sendKeys('123456');
         browser.driver.findElement(by.css('.btn.btn-info.btn-lg.btn-block.text-uppercase.waves-effect.waves-light')).click();

        
         var dashboard =(element(by.css('.col-lg-3.col-md-4.col-sm-4.col-xs-12')))
         expect(dashboard.getText()).toEqual('Dashboard');

         var email =(element(by.css('.hidden-xs.truncate-lg.ng-binding')))
         expect(email.getText()).toEqual('denny@adsemble.com');

            browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'email_password_its_OK.png');
        });


        done();
      });


              function writeScreenShot(data, filename) {
                    var stream = fs.createWriteStream(filename);
                    stream.write(new Buffer(data, 'base64'));
                    stream.end();
                }

});