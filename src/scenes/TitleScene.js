class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene'
        });
    }

    create() {
        this.startGameKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.textObject = this.make.text({
            x: this.game.renderer.width / 2,
            y: this.game.renderer.height / 2,
            text: 'PRESS ENTER TO START',
            origin: 0.5,
            style: {
                fontSize: '24px',
                fontFamily: 'Arial',
                color: '#ffffff',
                align: 'center',
                wordWrap: {
                    width: this.game.renderer.width / 2, useAdvancedWrap: true
                }
            },
            add: true
        });
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.startGameKey)) {
            this.StartGame();
        }
    }

    StartGame() {
        this.scene.start('GameScene');
    }
}

export default TitleScene;
