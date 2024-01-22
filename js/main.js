//Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value.toLowerCase()
//   const url = `https://pokeapi.co/api/v2/pokemon/${choice}`
// const url = 'https://pokeapi.co/api/v2/pokemon/'+choice (Alternate option for line above)

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

//this project isn't working right. The it's not actually returning an image which is related to the search parameter. Going to create a simpler project for now. 

// document.querySelector('button').addEventListener('click', getFetch);

// function getFetch() {
//   const choice = document.querySelector('input').value.toLowerCase();
//   const getObjectId = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${choice}&hasImages=true`;

//   fetch(getObjectId)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       if (data.objectIDs && data.objectIDs.length > 0) {
//         console.log(data.objectIDs[0]);
//         const objectId = data.objectIDs[0];
//         const getImageFromObjectId = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;

//         fetch(getImageFromObjectId)
//           .then(res => res.json())
//           .then(data => {
//             console.log(data);
//             document.querySelector('img').src = data.primaryImageSmall;
//           })
//           .catch(err => {
//             console.log(`error ${err}`);
//           });
//       } else {
//         console.log('No valid object IDs found');
//       }
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });
// }

//this project project doesn't actually grab an image related to your search unfortunately, but it does grab an image. It does it using 2 buttons though. I need to fix it so that the 2 fetches happen by clicking on only one button, so nest the fetches


// document.querySelector('#objectId').addEventListener('click', getobjectId);
// document.querySelector('#image').addEventListener('click', getImage);

// let objectId 

// function getobjectId() {
//   const choice = document.querySelector('input').value.toLowerCase();
//   let urlObjectId = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${choice}&hasImages=true`;

//   fetch(urlObjectId)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       objectId = data.objectIDs[3]
//       console.log(objectId)
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });
// }

// function getImage() {
//   const getImageFromObjectId = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;

//   fetch(getImageFromObjectId)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       document.querySelector('img').src = data.primaryImageSmall
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });
// }

// document.querySelector('button').addEventListener('click', getFetch);

// let randomObjectId = ''

// function getFetch() {
//   let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects`

//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       let random = Math.floor(Math.random() * data.objectIDs.length)
//       randomObjectId = data.objectIDs[random]
//       console.log(randomObjectId)

//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });

//     let url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectId}`;

//     fetch(url2)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       document.querySelector('img').src = data.primaryImageSmall
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });

// }

// function getImage() {
//   let getImageFromObjectId = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectId}`;

//   fetch(getImageFromObjectId)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       document.querySelector('img').src = data.primaryImageSmall
//     })
//     .catch(err => {
//       console.log(`error ${err}`);
//     });
// }

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
