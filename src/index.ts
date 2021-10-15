const canvas = <HTMLCanvasElement> document.getElementById('game');
const ctx = canvas.getContext('2d');

import {Player, Cactus, Brid, Cloud, Score} from './objects/exports';

let player: any;
let gravity: number;
let keys = {};
let scoreText: any;
let score: number;
let castus: any;
let cloud: any;
let clouds = [];
let bird: any;
let obstacles = [];
let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;
let gameSpeed: number;

let sprite = new Image();
sprite.src = './img/200-offline-sprite.png';

console.log(sprite);

export { canvas, ctx, sprite, gravity, gameSpeed, keys, cloud, clouds }