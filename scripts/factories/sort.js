
/******************************************************* fonction filtre de tri ********************************************************/

// function sortFactory(media) {

// const { title, date } = media;
// const filter = document.getElementById('name');
// //console.log(media)

// function selectFilter() {

//     if (this.value == 'date') {    
//         console.log('date des médias:  ' + date);
//         // toDo: trier par date des plus recentes au plus anciennes ?  ou inverse ?      
//     }

//     if (this.value == 'titre') {
//         console.log('titre des médias: ' + title);
//         // toDo: trier les titres par ordre alphabétiques,autre ?       
//     }

//     if (this.value == 'popularite') {
//         console.log('les + populaire');
//         // toDo: retourner sur la section des medias
//         // const mediaSection = document.getElementById('media_section');
//         // mediaSection.style.display = 'flex';        
//     }

// }

// filter.addEventListener('change', selectFilter);

//     return { sortFactory }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function sortFactory(currentPhotographMedias) {

//     const filter = document.getElementById('name');
    
//     filter.addEventListener('change', function () {

//         if (this.value == 'date') {    
//             console.log('date des médias:  ', currentPhotographMedias.date );
//             // currentPhotographMedias.sort((a, b) => {
//             //      a.date - b.date;
//             // })
//             // toDo: trier par date des plus recentes au plus anciennes ?  ou inverse ?      
//         }

//         if (this.value == 'titre') {
//             console.log('titre des médias: ', currentPhotographMedias.title );
//             // toDo: trier les titres par ordre alphabétiques,autre ?       
//         }

//         if (this.value == 'popularite') {
//             console.log('les + populaire');
//             // toDo: retourner sur la section des medias

//             // const mediaSection = document.getElementById('media_section');
//             // mediaSection.style.display = 'flex';        
//         }
//     });
//         return { sortFactory }
// }