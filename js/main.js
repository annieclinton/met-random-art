document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let random = Math.floor(Math.random() * data.objectIDs.length);
      let randomObjectId = data.objectIDs[random];
      console.log(randomObjectId);

      // Nested fetch inside the first .then() block
      let url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectId}`;

      return fetch(url2);
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector('img').src = data.primaryImageSmall;
      if(data.primaryImageSmall === ""){
        console.log('Database does not include an image for that object, re-running fetch to grab a new object...')
        getFetch()
      } 
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
