import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';
import EndScene from './scenes/EndScene';

const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 400,
    height: window.innerHeight < 700 ? window.innerHeight : 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: true
        }
    },
    scene: [
        BootScene,
        TitleScene,
        GameScene,
        EndScene
    ]
};

const game = new Phaser.Game(config); // eslint-disable-line no-unused-vars
