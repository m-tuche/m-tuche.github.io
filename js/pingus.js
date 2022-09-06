let songElements = document.getElementsByClassName("song");

for (var i = 0; i < songElements.length; i++) {
  /*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
  songElements[i].addEventListener("mouseover", function () {
    this.style.backgroundColor = "#00A0FF";

    this.querySelectorAll(".song-meta-data .song-title")[0].style.color =
      "#FFFFFF";
    this.querySelectorAll(".song-meta-data .song-artist")[0].style.color =
      "#FFFFFF";

    if (!this.classList.contains("amplitude-active-song-container")) {
      this.querySelectorAll(".play-button-container")[0].style.display =
        "block";
    }

    this.querySelectorAll(".song-duration")[0].style.color = "#FFFFFF";
  });

  /*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
  songElements[i].addEventListener("mouseout", function () {
    this.style.backgroundColor = "#FFFFFF";
    this.querySelectorAll(".song-meta-data .song-title")[0].style.color =
      "#272726";
    this.querySelectorAll(".song-meta-data .song-artist")[0].style.color =
      "#607D8B";
    this.querySelectorAll(".play-button-container")[0].style.display = "none";
    this.querySelectorAll(".song-duration")[0].style.color = "#607D8B";
  });

  /*
		Show and hide the play button container on the song when the song is clicked.
	*/
  songElements[i].addEventListener("click", function () {
    this.querySelectorAll(".play-button-container")[0].style.display = "none";
  });
}

/*
	Initializes AmplitudeJS
*/
Amplitude.init({
  continue_next: true,
  // callbacks: {
  //   song_change: function () {
  //     alert("here");
  //   },
  // },
  songs: [
    {
      name: "Scary Moosic",
      artist: "M-Tuche",
      album: "Pingu's Moosic",
      url: "albums/pingus/incredibox-v1-scary-moosic.mp3",
      cover_art_url: "art/pingus/scary-moosic.png",
    },
    {
      name: "Sunrise",
      artist: "M-Tuche",
      album: "Pingu's Moosic",
      url: "albums/pingus/incredibox-v3-sunrise.mp3",
      cover_art_url: "art/pingus/sunrise.png",
    },
    {
      name: "Rain",
      artist: "M-Tuche",
      album: "Pingu's Moosic",
      url: "albums/pingus/incredibox-v2-rain.mp3",
      cover_art_url: "art/pingus/rain.png",
    },
    {
      name: "Chase Scene",
      artist: "M-Tuche",
      album: "Pingu's Moosic",
      url: "albums/pingus/incredibox-v6-chase-scene.mp3",
      cover_art_url: "art/pingus/chase-scene.png",
    },
    {
      name: "Owl Moosic",
      artist: "M-Tuche",
      album: "Pingu's Moosic",
      url: "albums/pingus/incredibox-v8-owl-moosic.mp3",
      cover_art_url: "art/pingus/owl-moosic.png",
    },
    {
      name: "Happy Moosic",
      artist: "M-Tuche",
      album: "Pingu's Moosic",
      url: "albums/pingus/incredibox-v5-happy-moosic.mp3",
      cover_art_url: "art/pingus/happy-moosic.png",
    },
  ],
});
