import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
const video = document.querySelector("video");

const player = new MediaPlayer({the: video, plugins: [new AutoPlay()]});

const togglePlay = document.querySelector('btnTogglePlay');
togglePlay.onclick = () => player.togglePlay();

const toggleSound = document.querySelector('btnToggleSound');
toggleSound.onclick = () => player.toggleSound();