import React, { Component, useState } from 'react';

import logo from './logo.svg';
import './App.css';


export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = '';
const redirectUri = '';

const scopes = ["user-read-currently-playing", "user-read-playback-state"];

const hash = window.location.hash.substring(1).split("&").reduce((initial, item) => {
  if (item) {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});

window.location.hash = "";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {<a className="btn btn--loginApp-link" href={`${authEndpoint}clientId=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
          Login to Spotify
        </a>}
        
      </header>
    </div>
  );
}

export default App;
