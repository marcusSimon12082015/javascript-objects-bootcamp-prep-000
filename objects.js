var playlist = [item:{Green Day:'Basket Case'}];

function updatePlaylist(playlist,artist,title){
    playlist.push({Foo Fighters:"Monkey Wrench"});
    return playlist;
}

function removeFromPlaylist(playlist,artist){
  delete playlist.artist;
  return playlist;
}
