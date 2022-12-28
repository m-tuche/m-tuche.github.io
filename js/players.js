// Wait for the page to load first
window.onload = function () {

  function checkLoaded(count) {
    count--;
    if (count <= 0) {
      $("#js-preloader").addClass("loaded");
    }
    return count;
  }

  function hideContainers() {
    pingusContainer.classList.remove("show");
    breadContainer.classList.remove("show");
  }

  function doPlayAlbum(container, player) {
    hideContainers();
    container.classList.add("show");
    window.scrollTo(0, 0);
    player.play();
    return false;
  }

  // Define player variables
  var breadPlayer = SC.Widget(document.getElementById("bread-iframe"));
  var breadContainer = document.getElementById("bread-player");
  var breadBtn = document.getElementById("bread-button");
  var pingusPlayer = SC.Widget(document.getElementById("pingus-iframe"));
  var pingusContainer = document.getElementById("pingus-player");
  var pingusBtn = document.getElementById("pingus-button");
  var loadCount = 2;

  // Set player's volume
  breadPlayer.setVolume(60);
  pingusPlayer.setVolume(60);

  // Set player's buttons
  breadPlayer.bind(SC.Widget.Events.READY, function () {
    breadBtn.classList.add("ready");
    loadCount = checkLoaded(loadCount);
  });
  pingusPlayer.bind(SC.Widget.Events.READY, function () {
    pingusBtn.classList.add("ready");
    loadCount = checkLoaded(loadCount);
  });

  // Wire buttons with players
  breadBtn.onclick = function () {
    return doPlayAlbum(breadContainer, breadPlayer);
  };
  pingusBtn.onclick = function () {
    return doPlayAlbum(pingusContainer, pingusPlayer);
  };
  //Get a reference to the link on the page
  // with an id of "mylink"
};
