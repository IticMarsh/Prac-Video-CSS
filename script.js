document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('myVideo');
    var playBtn = document.getElementById('playBtn');
    var pauseBtn = document.getElementById('pauseBtn');
    var volumeOffBtn = document.getElementById('volumeOffBtn');
    var volumeUpBtn = document.getElementById('volumeUpBtn');

    playBtn.addEventListener('click', function() {
        video.play();
    });

    pauseBtn.addEventListener('click', function() {
        video.pause();
    });

    volumeOffBtn.addEventListener('click', function() {
        video.muted = true;
    });

    volumeUpBtn.addEventListener('click', function() {
        video.muted = false;
    });
});
