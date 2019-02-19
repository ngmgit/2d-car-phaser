export default class Car extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        config.scene.physics.world.enable(this);

        this.setDisplaySize(40, 60);
    }

    update(keys, time, delta) {
        if (Phaser.Input.Keyboard.JustDown(keys.right)) {
            this.x += 100;
        }

        if (Phaser.Input.Keyboard.JustDown(keys.left)) {
            this.x -= 100;
        }
        this.x = Phaser.Math.Clamp(this.x, 50, 350);
    }
}
