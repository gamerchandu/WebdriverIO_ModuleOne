import google from "../pages/Google.page";
import page from "../pages/Page"

describe("Show Google page", function() {
    before('Open Landing page', function() {
        page.visit("http://www.google.com");
        browser.pause(30000);
    });

    it('should display the banner', function() {
        expect(google.isbannerDisplayed()).to.be.true;
    });
});
