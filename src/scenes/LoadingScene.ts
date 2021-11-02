export class LoadingScene extends Phaser.Scene {
    private loadingBar: Phaser.GameObjects.Graphics;
    private progressBar: Phaser.GameObjects.Graphics;
  
    constructor() {
      super({
        key: 'BootScene'
      });
    }
  
    preload(): void {
      // set the background and create loading bar
      this.cameras.main.setBackgroundColor(0x98d687);
      this.createLoadingbar();
  
      // pass value to change the loading bar fill
      this.load.on(
        'progress',
        function (value: number) {
          this.progressBar.clear();
          this.progressBar.fillStyle(0xfff6d3, 1);
          this.progressBar.fillRect(
            this.cameras.main.width / 4,
            this.cameras.main.height / 2 - 16,
            (this.cameras.main.width / 2) * value,
            16
          );
        },
        this
      );
  
      // delete bar graphics, when loading complete
      this.load.on(
        'complete',
        function () {
          this.progressBar.destroy();
          this.loadingBar.destroy();
        },
        this
      );
  
        // load out package
        this.load.image("cactus", "assets/sprites/cactus.png");
        this.load.image("cloud", "assets/sprites/cloud.png");
        this.load.image("button", "assets/sprites/gameOver.png");
        this.load.image("ground", "assets/sprites/ground.png");

        //Load font
        this.load.bitmapFont('font', 'assets/font/font.png', 'assets/font/font.fnt');

        //Load audio
        this.load.audio('button-press','assets/audio/button-press.mp3');
        this.load.audio('hit','assets/audio/hit.mp3');
        this.load.audio('hit','assets/audio/score-reached.mp3');

        //Load sprite
        this.load.spritesheet('trex', 'assets/sprites/t-rex.png', { frameWidth: 115, frameHeight: 90 });
        this.load.spritesheet('brid', 'assets/sprites/brid.png', { frameWidth: 95, frameHeight: 80 });
    }
  
    update(): void {
        this.scene.start('MainMenuScene');
    }
  
    private createLoadingbar(): void {
        this.loadingBar = this.add.graphics();
        this.loadingBar.fillStyle(0x5dae47, 1);
        this.loadingBar.fillRect(
        this.cameras.main.width / 4 - 2,
        this.cameras.main.height / 2 - 18,
        this.cameras.main.width / 2 + 4,
        20
      );
      this.progressBar = this.add.graphics();
    }
}