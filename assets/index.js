const video = document.querySelector("video");
const button = document.querySelector("button");

function MediaPlayer(config){
    this.media = config.the;
}

MediaPlayer.prototype.play = function(){
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.pause();
};

const player = new MediaPlayer({the: video});
button.onclick = () => {
    if (player.paused)
        player.play();
    else
        player.pause();
}