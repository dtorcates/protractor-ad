describe('opendisplay homepage login', function() {
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
});