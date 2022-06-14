const musicPlayItems = document.querySelectorAll(".music-play-item");

musicPlayItems.forEach(function (item) {
  item.isPlaying = false;
  item.audio = item.querySelector("audio");

  item.addEventListener("click", function () {
    if (this.isPlaying) {
      item.audio.pause();
      item.audio.currentTime = 0;
    } else {
      item.audio.play();
    }

    console.log(this.isPlaying);
    item.isPlaying = !item.isPlaying;
  });
});

function new(){
 window.open("test.asp","new", "width=300, height=300, left=30, top=30, scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no");
}