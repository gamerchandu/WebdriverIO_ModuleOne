export default class Page {

     static visit(url) {
        return browser.url(url);
    }

     static isDisplayed(element){
        return element.isDisplayed();
    }
  
}
