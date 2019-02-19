export default class Brick extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.add.existing(this);
        config.scene.physics.world.enable(this);

        this.setDisplaySize(Brick.Config().size.x, Brick.Config().size.y);

        this.updateFlag = true;
    }

    update(time, delta) {
        if (this.canMove) {
            this.y += Brick.Config().moveAmount * (delta / 1000);
        }

        this.CheckForReset();
        if (this.DidPassedPlayer() && this.updateFlag) {
            this.scene.UpdateScore();
            this.updateFlag = false;
        }

        this.scene.physics.world.overlap(this, this.scene.car, this.carHit.bind(this));
    }

    CheckForReset() {
        if (this.y > this.scene.game.renderer.height + Brick.Config().size.y) {
            this.canMove = false;
        }
    }

    DidPassedPlayer() {
        if (this.y > this.scene.car.y + Brick.Config().size.y) {
            return true;
        }

        return false;
    }

    SetStatus(status) {
        this.canMove = status;
        this.y = Brick.Config().startPos.y;
        this.updateFlag = true;
    }

    carHit(enemy, carHit) {
        this.scene.ResetGame();
    }

    static Config() {
        return {
            size: {
                x: 25,
                y: 25
            },
            moveAmount: 60,
            startPos: {
                x: 0,
                y: -25
            }
        };
    }
}
