import Page from '../Pages/Page';

class Google extends Page {
    get bannner() { return $('#hplogo') };

    isbannerDisplayed() {
        return Page.isDisplayed(this.bannner);
    }
}
export default new Google();
