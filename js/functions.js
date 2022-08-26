/*
	When the bandcamp link is pressed, stop all propagation so AmplitudeJS doesn't
	play the song.
*/
let bandcampLinks = document.getElementsByClassName("bandcamp-link");

for (var i = 0; i < bandcampLinks.length; i++) {
  bandcampLinks[i].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

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

    this.querySelectorAll("img.bandcamp-grey")[0].style.display = "none";
    this.querySelectorAll("img.bandcamp-white")[0].style.display = "block";
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
    this.querySelectorAll("img.bandcamp-grey")[0].style.display = "block";
    this.querySelectorAll("img.bandcamp-white")[0].style.display = "none";
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
      cover_art_url: "album-art/a-lot-of-music.jpeg",
    },
    {
      name: "Dedicated to Bread",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v2-dedicted-to-bread.mp3",
      cover_art_url: "album-art/the-love-of-bread.jpeg",
    },
    {
      name: "The Love (Remastered)",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v4-the-love-remastered.mp3",
      cover_art_url: "album-art/the-love.jpeg",
    },
    {
      name: "Creepy Moosic",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v1-creepy-moosic.mp3",
      cover_art_url: "album-art/creepy-moosic.jpeg",
    },
    {
      name: "Elephan Moosic",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v7-elephant-moosic.mp3",
      cover_art_url: "album-art/elephant-moosic.jpeg",
    },
    {
      name: "Reaching the Stars",
      artist: "M-Tuche",
      album: "The Love of Bread",
      url: "songs/incredibox-v8-reaching-the-stars.mp3",
      cover_art_url: "album-art/reaching-the-stars.jpeg",
    },
  ],
});

// Amplitude.init({
//   continue_next: false,
//   callbacks: {
//     song_change: function () {
//       alert("here");
//     },
//   },
//   songs: [
//     {
//       name: "Risin' High (feat Raashan Ahmad)",
//       artist: "Ancient Astronauts",
//       album: "We Are to Answer",
//       url: "../songs/Ancient Astronauts - Risin' High (feat Raashan Ahmad).mp3",
//       cover_art_url: "album-art/we-are-to-answer.jpg",
//     },
//     {
//       name: "The Gun",
//       artist: "Lorn",
//       album: "Ask The Dust",
//       url: "../songs/08 The Gun.mp3",
//       cover_art_url: "album-art/ask-the-dust.jpg",
//     },
//     {
//       name: "Anvil",
//       artist: "Lorn",
//       album: "Anvil",
//       url: "../songs/LORN - ANVIL.mp3",
//       cover_art_url: "album-art/anvil.jpg",
//     },
//     {
//       name: "I Came Running",
//       artist: "Ancient Astronauts",
//       album: "We Are to Answer",
//       url: "../songs/ICameRunning-AncientAstronauts.mp3",
//       cover_art_url: "album-art/we-are-to-answer.jpg",
//     },
//     {
//       name: "First Snow",
//       artist: "Emancipator",
//       album: "Soon It Will Be Cold Enough",
//       url: "../songs/FirstSnow-Emancipator.mp3",
//       cover_art_url: "album-art/soon-it-will-be-cold-enough.jpg",
//     },
//     {
//       name: "Terrain",
//       artist: "pg.lost",
//       album: "Key",
//       url: "../songs/Terrain-pglost.mp3",
//       cover_art_url: "album-art/key.jpg",
//     },
//     {
//       name: "Vorel",
//       artist: "Russian Circles",
//       album: "Guidance",
//       url: "../songs/Vorel-RussianCircles.mp3",
//       cover_art_url: "album-art/guidance.jpg",
//     },
//     {
//       name: "Intro / Sweet Glory",
//       artist: "Jimkata",
//       album: "Die Digital",
//       url: "../songs/IntroSweetGlory-Jimkata.mp3",
//       cover_art_url: "album-art/die-digital.jpg",
//     },
//     {
//       name: "Offcut #6",
//       artist: "Little People",
//       album: "We Are But Hunks of Wood Remixes",
//       url: "../songs/Offcut6-LittlePeople.mp3",
//       cover_art_url: "album-art/we-are-but-hunks-of-wood.jpg",
//     },
//     {
//       name: "Dusk To Dawn",
//       artist: "Emancipator",
//       album: "Dusk To Dawn",
//       url: "../songs/DuskToDawn-Emancipator.mp3",
//       cover_art_url: "album-art/from-dusk-to-dawn.jpg",
//     },
//     {
//       name: "Anthem",
//       artist: "Emancipator",
//       album: "Soon It Will Be Cold Enough",
//       url: "../songs/Anthem-Emancipator.mp3",
//       cover_art_url: "album-art/soon-it-will-be-cold-enough.jpg",
//     },
//   ],
// });
