import Car from '../sprites/car';
import BrickSpawner from '../sprites/brickSpawner';

class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameScene'
        });
    }

    preload() {
    }

    create() {
        this.bg = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, 'road');
        this.bg.setDisplaySize(this.game.config.width, this.game.config.height);

        this.car = new Car({
            scene: this,
            key: 'car',
            x: 50,
            y: 600
        });

        this.brickSpawner = new BrickSpawner({
            scene: this
        });

        this.keys = {
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        };
    }

    update(time, delta) {
        this.car.update(this.keys, time, delta);
        this.brickSpawner.update(time, delta);
    }

    ResetGame() {
        this.scene.start('TitleScene');
    }
}

export default GameScene;

// TODO:
// remove constant value and get appropriate sizes as per the config
// Take resize into account
// Add Music, score reader
// If possible:
// Add different kind of enemies
// Effects
