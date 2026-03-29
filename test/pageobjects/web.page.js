const BasePage = require('./base.page')

class WebPage extends BasePage {

  get webTab()          { return $('//android.widget.TextView[@text="Web"]'); }


  async navigateTo() {
    await this.click(await this.webTab);
    await driver.pause(3000);
  }


  async scrollToBottom(scrolls) {
    for (const s of scrolls) {
      await driver.action('pointer')
        .move({ duration: 0, x: s.x1, y: s.y1 })
        .down({ button: 0 })
        .move({ duration: 1000, x: s.x2, y: s.y2 })
        .up({ button: 0 })
        .perform();
      await driver.pause(500);
    }
  }
}

module.exports = new WebPage();