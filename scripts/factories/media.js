
/******************************************************** factory qui affiche les medias du photographe *********************************************************/

function mediaFactory(media, photographer,currentPhotographMedias) {

    const filter = document.getElementById('name');   // filtre "trier par" 
    const { id, video, likes, title, image } = media;
    const { name }          = photographer;
    const firstName         = name.slice(0, name.indexOf(' '));    
    const mediaSection      = document.getElementById('media_section');
    const article           = document.createElement('article');
    const linkOpenMedia     = document.createElement('a');
    const divContenairTitle = document.createElement('div');
    const titleMedia        = document.createElement('h4');
    const divLike           = document.createElement('div');
    const likesOfMediaId    = document.createElement('h5'); 
    const imageHeartId      = document.createElement('img');
    const heartIcone        = (`../../assets/icons/heart-solid.svg`);  // coeur rouge
    const heartIconeAfter   = (`../../assets/icons/heart-solid3.svg`); // coeur gris
    const allLikes          = document.getElementsByClassName('total_hearts');
    article.className           = ('article_media');
    divContenairTitle.className = ('conteneur_title_likes');
    titleMedia.className        = ('media_title');
    titleMedia.textContent      = title;
    titleMedia.setAttribute       ('tabindex', '0');
    likesOfMediaId.classList    = ('counter_like-media_' + id);
    likesOfMediaId.textContent  = likes; 
    imageHeartId.className      = ('heart_icone-media_'+ id );
    imageHeartId.style.cursor   = ('pointer');
    imageHeartId.style.width    = ('24px');
    imageHeartId.setAttribute     ('src', heartIcone);
    imageHeartId.setAttribute     ('alt','likes');
    divLike.className           = ('like_numbers');
    divLike.setAttribute          ('tabindex', '0');
    mediaSection.appendChild(article);
    article.appendChild(linkOpenMedia);
    divContenairTitle.appendChild(linkOpenMedia);
    divLike.appendChild(divContenairTitle);
    divContenairTitle.appendChild(titleMedia);


    /************** filtre de tri *****************/
    filter.addEventListener('change', function () {

        if (filter.value == 'date') { 
            const mediaDate = currentPhotographMedias.sort((a, b) => {
                return new Date(a.date) < new Date(b.date) ? 1 : -1;
            });
            //console.log('date ordonnées: ' , mediaDate)
            console.log(mediaDate)  
        }
    
        if (filter.value == 'titre') {
            const mediaTitle = currentPhotographMedias.sort((a, b) => {
                return a.title > b.title ? 1 : -1;            
            });
            //console.log('titre ordonnées:  ' , mediaTitle)
            console.log(mediaTitle)
                         
        }

        if (filter.value == 'popularite') {
            const mediaLike = currentPhotographMedias.sort((a, b) => {
                return a.likes < b.likes ? 1 : -1;           
            });
            //console.log('like ordonnées:  ' , mediaLike)
            console.log(mediaLike)    
        }

    });

    let likeMedia = false;
    /***** fonction qui incrémente et décrémente les likes, change la couleur du coeur et du titre  ******/
    function addSubLikeMedia() {
        likeMedia = !likeMedia;

        if (likeMedia) {

            likesOfMediaId.textContent++;
            allLikes[0].textContent++
            imageHeartId.setAttribute ('src', heartIconeAfter);
            imageHeartId.setAttribute ('alt','likes');
            likesOfMediaId.style.color = ('#585858');
            titleMedia.style.color     = ('#585858');

        } else {

            likesOfMediaId.textContent--
            allLikes[0].textContent--
            imageHeartId.setAttribute('src', heartIcone);
            likesOfMediaId.style.color = ('#911C1C');
            titleMedia.style.color     = ('#911C1C');

        }
    }

    /***** incrémentation/décrémentation des likes au click sur le coeur et dans l'encart total ******/
    imageHeartId.addEventListener('click', addSubLikeMedia);

    /***** incrémentation/décrémentation des likes avec la touche Entrée sur le coeur après tabulation + dans l'encart total ******/
    divLike.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addSubLikeMedia();                      
        }                  
    }); 
  
    /***** ouverture lightbox  au click (lightbox.js) *****/
    linkOpenMedia.addEventListener('click', () => {
        getOpenLightBox(media,photographer,currentPhotographMedias);                                                    
    });

    /***** ouverture lightbox  touche entrée (lightbox.js) *****/
    linkOpenMedia.addEventListener('keydown', (e) => {     
        if (e.key === 'Enter') {
            getOpenLightBox(media,photographer,currentPhotographMedias);  
        }                                                                                                        
    }); 
   
    function getPhotographerMediaDOM() {

        if (media.image) {

            const img       = document.createElement('img');         
            img.className   = ('media_photographer');
            img.setAttribute  ('src',`../../assets/photographers/${firstName}/${image}`);
            img.setAttribute  ('alt',title +',' +' ' + 'photo prise par'+' ' + name);
            img.setAttribute  ('tabindex', '0')      
            article.appendChild(linkOpenMedia);
            article.appendChild(divContenairTitle); 
            linkOpenMedia.appendChild(img);
            divContenairTitle.appendChild(divLike);
            divLike.appendChild(likesOfMediaId);
            divLike.appendChild(imageHeartId);  
          
        } else {

            const videoPhotograph       = document.createElement('video');
            const sourceVideo           = document.createElement('source');
            videoPhotograph.className   = ('media_photographer');
            videoPhotograph.setAttribute  ('tabindex', '0');
            videoPhotograph.setAttribute  ('type', 'video/mp4');  
            sourceVideo.setAttribute      ('src', `../../assets/photographers/${firstName}/${video}`);
            sourceVideo.setAttribute      ('alt',title +',' +' ' + 'vidéo réalisée par'+' ' + name);     
            article.appendChild(linkOpenMedia);
            article.appendChild(divContenairTitle);
            linkOpenMedia.appendChild(videoPhotograph);
            videoPhotograph.appendChild(sourceVideo);   
            divContenairTitle.appendChild(divLike);
            divLike.appendChild(likesOfMediaId);
            divLike.appendChild(imageHeartId);

        }

    }
    return { getPhotographerMediaDOM }     
}