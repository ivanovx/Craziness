var body = document.body;
var track = document.getElementById("audio-track");

function delayPlayToggle (action) {
    setTimeout(function () {
        if (action === "play") {
            track.play();
        } else {
            track.pause();
        }
    }, 50);
}

function togglePlay (e) {
    var classPaused = "paused";
    var classPlaying = "playing";
    var isPaused = body.classList.contains(classPaused);
    var target = e.target;

    e.preventDefault();

    if (isPaused) {
        body.classList.remove("first-play");
        body.classList.remove(classPaused);
        target.textContent = target.getAttribute("data-alt-text");
        delayPlayToggle("play");
    } else {
        body.classList.add(classPaused);
        target.textContent = target.getAttribute("data-text");
        delayPlayToggle("pause");
    }
}

function toggleVolume (e) {
    var muted = track.volume === 0;
    var target = e.target;

    if (muted) {
        track.volume = 1;
        target.textContent = target.getAttribute("data-text");
    } else {
        track.volume = 0;
        target.textContent = target.getAttribute("data-alt-text");
    }
}

document.getElementById("play-toggle").addEventListener("click", togglePlay);
document.getElementById("mute-toggle").addEventListener("click", toggleVolume);

/*
document.getElementById("big-play-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("play-toggle").click();
});
   */