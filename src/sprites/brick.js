export default class Brick extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        config.scene.physics.world.enable(this);

        this.setDisplaySize(25, 25);
    }

    update(time, delta) {
        if (this.canMove) {
            this.y += 1;
        }

        if (this.y > 725) {
            this.canMove = false;
        }

        this.scene.physics.world.overlap(this, this.scene.car, this.carHit.bind(this));
    }

    SetStatus(status) {
        this.canMove = status;
        this.y = -25;
    }

    carHit(enemy, carHit) {
        this.scene.ResetGame();
    }
}
