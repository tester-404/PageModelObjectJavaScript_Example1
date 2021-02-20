var Main = function(){

    this.zadanieSelection = function (taskNumber){
      //  browser.url('/');
      browser.url('https://testingcup.pgs-soft.com');
        browser.maximizeWindow();
        const button = $('h2=Zadanie '+taskNumber+'');
        button.click();
    };
};

module.exports = Main;