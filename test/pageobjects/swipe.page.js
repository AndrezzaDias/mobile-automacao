const BasePage = require('./base.page')

class SwipePage extends BasePage {

  get swipeTab()  {return $('//android.widget.TextView[@text="Swipe"]'); }
  get pageTitle() {return $('//android.widget.TextView[@text="Swipe horizontal"]')}
  get card1()     {return $('(//android.view.ViewGroup[@content-desc="card"])[1]')}
  get card2()     {return $('(//android.view.ViewGroup[@content-desc="card"])[2]')}

  async navigateTo() {
    await this.click(await this.swipeTab);
    await driver.pause(2000);
  }

  async swipeAndValidate(steps) {
    for (const step of steps) {
      await driver.action('pointer')
        .move({ duration: 0, x: step.x1, y: step.y1 })
        .down({ button: 0 })
        .move({ duration: 1000, x: step.x2, y: step.y2 })
        .up({ button: 0 })
        .perform()
      await driver.pause(1500)
    }
  }
}
module.exports = new SwipePage();