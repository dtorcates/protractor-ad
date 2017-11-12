describe('opendisplay homepage', function() {
   it('should have a budget', function(done) {
    
    browser.driver.get('https://dev-opendisplay.adsemble.com'); 
    
    //Display the Discover your Reach
    expect(element(by.css('.bg-overlay>h1')).isDisplayed()).toBeTruthy();

    //Display  buttons
    expect(element(by.css('.btn.btn-success.btn-lg.m-r-15')).isDisplayed()).toBeTruthy();
    expect(element(by.css('.btn.btn-success.btn-lg.m-r-20')).isDisplayed()).toBeTruthy();
    expect(element(by.css('.btn.btn-lg.btn-success')).isDisplayed()).toBeTruthy();

    //Display  fields
    expect(element(by.css('#budget')).isDisplayed()).toBeTruthy();
    //Type Budget by 5000
    browser.driver.findElement(by.id('budget')).clear;
    browser.driver.findElement(by.id('budget')).sendKeys('5000');
    browser.driver.findElement(by.id('budget')).sendKeys(protractor.Key.TAB);
    browser.sleep(3000);

    //Display field Est Impressions
    expect(element(by.css('.form-control.input-xl.b-all.disabled.truncate.impressions.impressions-home.ng-pristine.ng-untouched.ng-valid.ng-binding.ng-not-empty')).isDisplayed()).toBeTruthy();
    
    var impressions=(element(by.css('.form-control.input-xl.b-all.disabled.truncate.impressions.impressions-home.ng-pristine.ng-untouched.ng-valid.ng-binding.ng-not-empty')))
    //Assert with Est Impression default value 687,525
     expect(impressions.getText()).toEqual('687,525 ');
    
    
     //Click button signin
     browser.driver.findElement(by.css('.btn.btn-success.btn-lg.m-r-15')).click();
     browser.sleep(3000);
     browser.navigate().back();
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 

    //Click button signup 
    /*
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 
     browser.driver.findElement(by.css('.btn.btn-success.btn-lg.m-r-20')).click();
     browser.sleep(3000);
     browser.navigate().back();
   */

     
    //Click button Create Account
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 
     browser.driver.findElement(by.css('.btn.btn-lg.btn-success')).click();
     browser.sleep(3000);
     browser.navigate().back();

    //Click href about
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 
     browser.sleep(3000);
     element(by.partialLinkText("About")).click();
     browser.navigate().back();
     
     //Click href Careers
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 
     browser.sleep(5000);
     element(by.partialLinkText("Careers")).click();
     browser.navigate().back();
     
     //Click href privacy-policy
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 
     browser.sleep(5000);
     element(by.partialLinkText("Privacy Policy")).click();
     browser.navigate().back();

     //Click href terms-of-service
     browser.driver.get('https://dev-opendisplay.adsemble.com'); 
     browser.sleep(5000);
     element(by.partialLinkText("Terms of Service")).click();
     browser.navigate().back();

    done();

  });
});