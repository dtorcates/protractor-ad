describe('opendisplay homepage', function() {
   it('should have a budget', function(done) {
     var loginURL;

    browser.driver.get('https://fox-staging.adsemblecalendar.com/'); //Navigate to google.com
    loginURL = browser.getCurrentUrl();
    //window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    
    //Locate the signin element 
    expect(element(by.css('.panel-body>h3')).isDisplayed()).toBeTruthy();


    //Locate the text box element and insert credenti
    
    browser.driver.findElement(by.id('user_email')).sendKeys('');
    browser.driver.findElement(by.id('user_password')).sendKeys('');

    browser.driver.findElement(by.id('user_email')).sendKeys('staging_user@grr.la');
    browser.driver.findElement(by.id('user_password')).sendKeys('123456');
    
     //Click on search button

    browser.driver.findElement(by.css('.btn.btn-white.btn-cons')).click();


    //Locate the Dashboard element 
    /*
    browser.sleep(3000).then(
  function(){
     console.log("Waiting");
     expect(element(by.css('.page-title>h3')).isDisplayed()).toBeTruthy();
  }

)
*/
    browser.driver.sleep(3000);
    //expect(element(by.css('div.page-title>h3')).isDisplayed()).toBeTruthy();

    //Assert that page title quals to expected title
    //expect(browser.getCurrentUrl()).not.toEqual(loginURL);
    expect(browser.driver.getTitle()).toEqual('AdSemble Calendar');

     //Locate the campaign link element 
    browser.driver.get('https://secure.adsemblecalendar.com/campaigns');
    

    done();

  });
});