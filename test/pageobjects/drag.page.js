const BasePage = require('./base.page')

class DragPage extends BasePage {

  get dragTab() { return $('//android.widget.TextView[@text="Drag"]') }
  get retryButton() { return $('//android.widget.TextView[@text="Retry"]') }

  async navigateTo() {
    await this.click(await this.dragTab)
    await driver.pause(1500)
  }
  async dragAndDropAll() {

    // Peça 1: drag-l2 → quadrado central (9)
    await driver.action('pointer')
      .move({ duration: 0, x: 131, y: 1929 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 285, y: 892 })
      .up({ button: 0 })
      .perform();
    await driver.pause(600)

    // Peça 2: drag-r3 → quadrado inferior direito (19)
    await driver.action('pointer')
      .move({ duration: 0, x: 305, y: 1901 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 735, y: 1102 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 3: drag-r1 → quadrado superior direito (7)
    await driver.action('pointer')
      .move({ duration: 0, x: 431, y: 1921 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 747, y: 590 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 4: drag-c1 → quadrado superior central (5)
    await driver.action('pointer')
      .move({ duration: 0, x: 640, y: 1918 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 534, y: 646 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 5: drag-c3 → quadrado inferior central (17)
    await driver.action('pointer')
      .move({ duration: 0, x: 805, y: 1938 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 545, y: 1060 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 6: drag-r2 → quadrado central direito (13)
    await driver.action('pointer')
      .move({ duration: 0, x: 965, y: 1921 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 766, y: 842 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 7: drag-c2 → quadrado central (11)
    await driver.action('pointer')
      .move({ duration: 0, x: 369, y: 2078 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 540, y: 839 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 8: drag-l1 → quadrado superior esquerdo (3)
    await driver.action('pointer')
      .move({ duration: 0, x: 512, y: 2089 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 294, y: 590 })
      .up({ button: 0 })
      .perform()
    await driver.pause(600)

    // Peça 9: drag-l3 → quadrado inferior esquerdo (15)
    await driver.action('pointer')
      .move({ duration: 0, x: 702, y: 2083 })
      .down({ button: 0 })
      .move({ duration: 1000, x: 369, y: 1068 })
      .up({ button: 0 })
      .perform()
    await driver.pause(1500)
  }
}
module.exports = new DragPage()