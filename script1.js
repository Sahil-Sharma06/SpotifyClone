// Get the Spotify client ID and client secret from the Spotify Developer Dashboard.
const clientId = "YOUR_CLIENT_ID";
const clientSecret = "YOUR_CLIENT_SECRET";

// Create a function to get the access token.
async function getAccessToken() {
  const url = "https://accounts.spotify.com/api/token";
  const body = {
    grant_type: "client_credentials",
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Authorization": "Basic " + btoa(clientId + ":" + clientSecret),
  };

  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  });

  const data = await response.json();
  return data.access_token;
}

// Create a function to play a song.
async function playSong(songId) {
  const accessToken = await getAccessToken();

  const url = "https://api.spotify.com/v1/me/player/play";
  const headers = {
    "Authorization": "Bearer " + accessToken,
  };

  const body = {
   uris: [songId],
  };

  await fetch(url, {
    method: "PUT",
    headers: headers,
    body: body,
  });
}

// Create a function to get the currently playing song.
async function getCurrentSong() {
  const accessToken = await getAccessToken();

  const url = "https://api.spotify.com/v1/me/player/currently-playing";
  const headers = {
    "Authorization": "Bearer " + accessToken,
  };

  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });

  const data = await response.json();
  return data;
}

// The main function.
async function main() {
  const accessToken = await getAccessToken();

  // Get the currently playing song.
  const song = await getCurrentSong();

  // Update the UI with the current song.
  document.querySelector("#player h1").textContent = song.name;
  document.querySelector("#player p").textContent = song.artist.name;

  // Set up event listeners for the play, pause, next, and previous buttons.
  document.querySelector("#player button.play").addEventListener("click", () => {
    playSong(song.id);
  });

  document.querySelector("#player button.pause").addEventListener("click", () => {
    // TODO: Implement pause functionality.
  });

  document.querySelector("#player button.next").addEventListener("click", () => {
    // TODO: Implement next song functionality.
  });
}
