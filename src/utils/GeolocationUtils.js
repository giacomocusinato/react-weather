/*
  Gets the current user location as coordinates and returns
  the object as a promise.
*/
export function getCoordinates() {
  if (navigator.geolocation) {

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
           lat: position.coords.latitude,
           lon: position.coords.longitude
         });
      });
    })

  } else {
    console.log('Geolocation not supported');
  }
}
