export async function loadTrackData (trackId, fetchDataQueue) {
  // AJAX call

  // tslint:disable-next-line
  let loadedTrack = {
    title: 'loadTrackData',
    subtitle: 'loadTrackData',
    rating: 10,
    artURL: 'loadTrackData',
  }

  for(let i=0; i<2500000000; i++) { /* ARTIFICIAL LOAD */ }    
  return loadedTrack
}

export async function loadTrackArt(trackId) {
  // AJAX Call

  for(let i=0; i<500000000; i++) { /* ARTIFICIAL LOAD */ }    
  console.log('TRACK ART', trackId)
  return true;
}