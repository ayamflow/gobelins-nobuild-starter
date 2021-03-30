import * as PIXI from 'https://cdn.skypack.dev/pixi.js'

export class Playground {
    constructor(canvas) {
        this.update = this.update.bind(this)
        
        this.initRenderer(canvas)
        this.initScene()

        this.app.ticker.add(this.update)
    }

    initRenderer(canvas) {
        this.app = new PIXI.Application({
            width: innerWidth, height: innerHeight,
            resolution: window.devicePixelRatio || 1,
            view: canvas,
        });
    }

    initScene() {
        this.container = new PIXI.Container()
        this.app.stage.addChild(this.container)

        const texture = PIXI.Texture.from('/assets/bunny.png')
        for (let i = 0; i < 25; i++) {
            const bunny = new PIXI.Sprite(texture)
            bunny.anchor.set(0.5)
            bunny.x = (i % 5) * 40
            bunny.y = Math.floor(i / 5) * 40
            this.container.addChild(bunny)
        }

        this.container.x = this.app.screen.width * 0.5
        this.container.y = this.app.screen.height * 0.5
        this.container.pivot.x = this.container.width * 0.5
        this.container.pivot.y = this.container.height * 0.5
    }

    update(dt) {
        this.container.rotation -= 0.01 * dt
    }
}