import { LEVEL, OBJECT_TYPE } from './setup';
//Classes
import GameBoard from './GameBoard';

//DOM ELEMENTS
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

//Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

//Initial setup
let score = 0;
let timer = 0;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkCollision(pacman, ghost) {}

function gameLoop(pacman, ghost) {}

function startGame() {}
