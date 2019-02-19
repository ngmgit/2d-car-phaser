export default class Brick extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        config.scene.physics.world.enable(this);

        this.setDisplaySize(25, 25);

        this.updateFlag = true;
    }

    update(time, delta) {
        if (this.canMove) {
            this.y += 1;
        }

        this.CheckForReset();
        if (this.didPassedPlayer() && this.updateFlag) {
            this.scene.UpdateScore();
            this.updateFlag = false;
        }

        this.scene.physics.world.overlap(this, this.scene.car, this.carHit.bind(this));
    }

    CheckForReset() {
        if (this.y > 725) {
            this.canMove = false;
        }
    }

    didPassedPlayer() {
        if (this.y > 675) {
            return true;
        }

        return false;
    }

    SetStatus(status) {
        this.canMove = status;
        this.y = -25;
        this.updateFlag = true;
    }

    carHit(enemy, carHit) {
        this.scene.ResetGame();
    }
}
