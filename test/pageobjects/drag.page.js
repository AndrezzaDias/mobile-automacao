const BasePage = require('./base.page');

class DragPage extends BasePage {


  get dragTab() { return $('//android.widget.TextView[@text="Drag"]'); }


  get dragPiece() { return $('//android.view.ViewGroup[@content-desc="drag-l2"]/android.widget.ImageView'); }

 
  get dropTarget() { return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[9]'); }


  async navigateTo() {
    await this.click(await this.dragTab)
    await driver.pause(1500)
  }

  async dragAndDrop() {
    const piece  = await this.dragPiece;
    const target = await this.dropTarget;

    // Pega as coordenadas do centro da peça e do destino
    const pieceLocation  = await piece.getLocation()
    const pieceSize      = await piece.getSize()
    const targetLocation = await target.getLocation()
    const targetSize     = await target.getSize()

    // Calcula o centro de cada elemento
    const startX = pieceLocation.x  + pieceSize.width  / 2
    const startY = pieceLocation.y  + pieceSize.height / 2
    const endX   = targetLocation.x + targetSize.width  / 2
    const endY   = targetLocation.y + targetSize.height / 2

    // Executa o gesto de arrastar e soltar
    await driver.action('pointer')
      .move({ x: startX, y: startY })
      .down()
      .pause(500)
      .move({ x: endX, y: endY, duration: 1000 })
      .up()
      .perform()

    await driver.pause(1500)
  }
}
module.exports = new DragPage();