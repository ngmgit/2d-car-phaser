import Brick from './brick';

const TOTAL_BRICKS = 10;

export default class BrickSpawner extends Phaser.GameObjects.GameObject {
    constructor(config) {
        super(config.scene);
        config.scene.add.existing(this);

        this.delayCounter = 0;
        this.currentBrick = 0;
        this.bricks = [];

        for (let i = 0; i < TOTAL_BRICKS; i++) {
            this.bricks.push(new Brick({
                scene: config.scene,
                key: 'brick',
                x: 0,
                y: -25
            }));
        }
    }

    update(time, delta) {
        this.delayCounter += delta / 1000;

        if (this.delayCounter > Phaser.Math.RND.realInRange(2, 3.5)) {
            this.GetBrick();
            this.delayCounter = 0;
        }

        this.bricks.forEach(brick => {
            brick.update(time, delta);
        });
    }

    GetBrick() {
        this.currentBrick %= TOTAL_BRICKS;

        const randInt = Phaser.Math.RND.integerInRange(0, 3);
        const brick = this.bricks[this.currentBrick];
        brick.SetStatus(true);
        brick.x = 50 + 100 * randInt;

        this.currentBrick++;
    }
}
