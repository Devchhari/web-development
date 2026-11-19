console.log("Welcome to Spotify ");
let songIndex = 0;
let audioElement = new Audio(songs[0].src);
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" },
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" },   
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" },
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" },
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" },
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" },
    { name: "Let Me Love You", artist: "Justin Bieber", src: "songs/1.mp3" }
];
// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});
// listen to events
myProgressBar.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    // update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

