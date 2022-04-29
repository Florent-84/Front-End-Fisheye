// /* eslint-disable eqeqeq */

// async function getPhotographers() {

//   /********** récupération du .json **********/
//   return fetch('../../data/photographers.json')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       return(data);
//     })

// }
    
// async function displayData(photographers, media) {

//   const photographersSection = document.querySelector(".photographer_section");
//   const filter               = document.getElementById('name');                                    // filtre "trier par" 
//   let params                 = (new URL(document.location)).searchParams;
//   let idPhotographe          = params.get('id');
//   let sortedKey              = localStorage.getItem('sortedBy');
    
//   /********* dropdown "trier par" sur photographer.html, réglé sur popularité de like par défaut *********/
//   if (filter) {
//     filter.addEventListener('change', function () {

//       localStorage.setItem('sortedBy', filter.value);
//       location.reload();

//     });

//   } else {
//     console.log("Page d'accueil des photographes");
//   }
   
//   /** parcours de tous les photographes **/
//   photographers.forEach((photographer) => {

//     // eslint-disable-next-line no-undef
//     const photographerModel = photographerFactory(photographer);
    
//     if (idPhotographe) {

//       if (photographer.id == idPhotographe) {

//         photographerModel.getPhotographerHeaderDOM();                                              // encart du profil du photographe
//         let photographerMediaLikes = 0;

//         /****************** filtrer les medias *****************/
//         const currentPhotographMedias = media.filter((media) => { 
//           return media.photographerId == idPhotographe;
//         });

//         /** tris des medias dans le dropdown  **/
//         currentPhotographMedias.sort((a, b) => {
//           switch(sortedKey) { 
//             case 'date':
//               return new Date(a.date) < new Date(b.date) ? 1 : -1;
//             case 'titre':
//               return a.title > b.title ? 1 : -1;
//             default:
//               return a.likes < b.likes ? 1 : -1;
//           }
//         });
            
//         /******* parcours de tous les medias *******/
//         currentPhotographMedias.forEach((media) => { 

//           photographerMediaLikes += media.likes;
//           // eslint-disable-next-line no-undef
//           const photographerMedia = mediaFactory(media, photographer,currentPhotographMedias);
//           photographerMedia.getPhotographerMediaDOM();                                           // affiche les médias du photographe

//           /** affichage de la value du dropdown **/
//           if (sortedKey == 'popularite') {
//             filter.value = sortedKey
//           }
//           if (sortedKey == 'date') {
//             filter.value = sortedKey
//           }
//           if (sortedKey == 'titre') {
//             filter.value = sortedKey
//           }
//         });
//         photographerModel.getPhotographerMediaTotalLikes(photographerMediaLikes,photographer);   // encart total likes
//       }

//     } else {    
//       const userCardDOM = photographerModel.getUserCardDOM();                                    // affiche tous les photographes sur la page d'accueil 
//       photographersSection.appendChild(userCardDOM);
//       localStorage.clear()
//     }
//   });
// }
    
// async function init() {
    
//   /********* Récupère les datas des photographes **********/
//   const { photographers, media } = await getPhotographers();
//   displayData(photographers, media);
// }
    
// init();




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* eslint-disable eqeqeq */

async function getPhotographers() {

  /********** récupération du .json **********/
  return fetch('data/photographers.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return(data);
    })

}
    
async function displayData(photographers, media) {

  const photographersSection = document.querySelector(".photographer_section");
  const filter               = document.getElementById('name');                                    // filtre "trier par" 
  let params                 = (new URL(document.location)).searchParams;
  let idPhotographe          = params.get('id');
  let sortedKey              = localStorage.getItem('sortedBy');
    
  /********* dropdown "trier par" sur photographer.html, réglé sur popularité de like par défaut *********/
  if (filter) {
    filter.addEventListener('change', function () {

      localStorage.setItem('sortedBy', filter.value);
      location.reload();

    });

  } else {
    console.log("Page d'accueil des photographes");
  }
   
  /** parcours de tous les photographes **/
  photographers.forEach((photographer) => {

    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    
    if (idPhotographe) {

      if (photographer.id == idPhotographe) {

        photographerModel.getPhotographerHeaderDOM();                                              // encart du profil du photographe
        let photographerMediaLikes = 0;

        /****************** filtrer les medias *****************/
        const currentPhotographMedias = media.filter((media) => { 
          return media.photographerId == idPhotographe;
        });

        /** tris des medias dans le dropdown  **/
        currentPhotographMedias.sort((a, b) => {
          switch(sortedKey) { 
            case 'date':
              return new Date(a.date) < new Date(b.date) ? 1 : -1;
            case 'titre':
              return a.title > b.title ? 1 : -1;
            default:
              return a.likes < b.likes ? 1 : -1;
          }
        });
            
        /******* parcours de tous les medias *******/
        currentPhotographMedias.forEach((media) => { 

          photographerMediaLikes += media.likes;
          // eslint-disable-next-line no-undef
          const photographerMedia = mediaFactory(media, photographer,currentPhotographMedias);
          photographerMedia.getPhotographerMediaDOM();                                           // affiche les médias du photographe

          /** affichage de la value du dropdown **/
          if (sortedKey == 'popularite') {
            filter.value = sortedKey
          }
          if (sortedKey == 'date') {
            filter.value = sortedKey
          }
          if (sortedKey == 'titre') {
            filter.value = sortedKey
          }
        });
        photographerModel.getPhotographerMediaTotalLikes(photographerMediaLikes,photographer);   // encart total likes
      }

    } else {    
      const userCardDOM = photographerModel.getUserCardDOM();                                    // affiche tous les photographes sur la page d'accueil 
      photographersSection.appendChild(userCardDOM);
      localStorage.clear()
    }
  });
}
    
async function init() {
    
  /********* Récupère les datas des photographes **********/
  const { photographers, media } = await getPhotographers();
  displayData(photographers, media);
}
    
init();