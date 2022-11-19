var vid = document.getElementById("alarm-sound");
var isPlaying = false;

function playPause() {
    var change = document.getElementById("button");
    if (isPlaying) {
        vid.pause();
        change.innerHTML = '<span class="button"><i class="material-icons">play_arrow</i></span>';
    } else {
        vid.play();
        change.innerHTML = '<span class="button"><i class="material-icons">pause</i></span>';
    }
    isPlaying = !isPlaying;
}