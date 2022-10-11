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
      name: "A lot of Music (Remastered)",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v3-a-lot-of-music-remastered.mp3",
      cover_art_url: "art/a-lot-of-music.jpeg",
    },
    {
      name: "Dedicated to Bread",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v2-dedicted-to-bread.mp3",
      cover_art_url: "art/the-love-of-bread.jpeg",
    },
    {
      name: "The Love (Remastered)",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v4-the-love-remastered.mp3",
      cover_art_url: "art/the-love.jpeg",
    },
    {
      name: "Creepy Moosic",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v1-creepy-moosic.mp3",
      cover_art_url: "art/creepy-moosic.jpeg",
    },
    {
      name: "Elephan Moosic",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v7-elephant-moosic.mp3",
      cover_art_url: "art/elephant-moosic.jpeg",
    },
    {
      name: "Reaching the Stars",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v8-reaching-the-stars.mp3",
      cover_art_url: "art/reaching-the-stars.jpeg",
    },
  ],
});

