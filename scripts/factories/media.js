
///////////////////////////////////////////////////////// factory qui affiche les medias du photographe ///////// ////////////////////////////////////////

function mediaFactory(media, photographer) {
                                                                                                       
    const { id, photographerId, video, videoTitle, likes, title, image, date, price } = media;
    const { name }          = photographer;
    const firstName         = name.slice(0, name.indexOf(' ')); 
    const imagePhotographer = (`../../assets/photographers/${firstName}/${image}`);  
    const videoPhotographer = (`../../assets/photographers/${firstName}/${video}`);    
    const heartIcone        = (`../../assets/icons/heart-solid.svg`);
   
    function getPhotographerMediaDOM() {
        
        if (media.image) {
            getPhotographerPhotoDOM();
            
          
        } else {
             getPhotographerVideoDOM();
        }

    }
                                                       
    ///////////////////////////////////// affichage des photos  ///////////////////////////
    function getPhotographerPhotoDOM() {
            
        const mediaSection      = document.getElementById('media_section');
        const article           = document.createElement('article');
        const img               = document.createElement('img');
        const linkOpenMedia     = document.createElement('a');
        const divContenairTitle = document.createElement('div');
        const p1                = document.createElement('p');
        const divLike           = document.createElement('div');
        const p2                = document.createElement('p');
        const imageHeart        = document.createElement('img');
        const imageHeartId      = document.getElementsByClassName('heart_icone-media_' + id);
        const likesOfPhotoId    = document.getElementsByClassName('counter_like-media_' + id);    
        article.className           = ('article_media');                      
        img.className               = ('image_photographer');
        img.setAttribute              ('src',imagePhotographer);
        img.setAttribute              ('alt',title +',' +' ' + 'photo prise par'+' ' + name);
        img.setAttribute              ('tabindex', '0');     
        divContenairTitle.className = ('conteneur_title_likes');
        p1.textContent              = title;
        p1.className                = ('media_title');
        p1.setAttribute               ('tabindex', '0');
        divLike.className           = ('like_numbers');
        divLike.setAttribute          ('tabindex', '0');
        p2.textContent              = likes;
        p2.className                = ('counter_like-media counter_like-media_' + id);
        imageHeart.className        = ('heart_icone-media heart_icone-media_' + id);
        imageHeart.setAttribute       ('src', heartIcone);
        imageHeart.setAttribute       ('alt','likes');
        mediaSection.appendChild(article);
        article.appendChild(linkOpenMedia);
        article.appendChild(divContenairTitle);   
        linkOpenMedia.appendChild(img);
        divContenairTitle.appendChild(p1);
        divContenairTitle.appendChild(divLike);
        divLike.appendChild(p2);
        divLike.appendChild(imageHeart);
        const allLikes = document.getElementsByClassName('total_hearts');

        ////////incrémentation des likes au click sur les articles photo et ajout dans l'encart total/////////
        imageHeartId[0].addEventListener('click', () => {    
            allLikes[0].textContent++
            likesOfPhotoId[0].textContent++ 
            //console.log(likesOfPhotoId[0].textContent)
        })

        ///////// ouverture lightbox image au click (lightbox.js) ///////////
        linkOpenMedia.addEventListener('click',() => {
            openLightBox(media,photographer);                                                    
        });

        ////////  incrémentation des likes  touche entrée sur les articles image et ajout dans l'encart total   /////////
        divLike.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                allLikes[0].textContent++
                likesOfPhotoId[0].textContent++                       
            }                  
        })

        ///////// ouverture lightbox image touche entrée (lightbox.js) ///////////             
        linkOpenMedia.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                openLightBox(media,photographer);                       
            }                  
        })
    }
    
    ///////////////////////////////////////////////////// affichage des videos /////////////////////////////////////
    function getPhotographerVideoDOM() {                                                       
        
        const mediaSection      = document.getElementById('media_section');
        const article           = document.createElement('article');
        const linkOpenMedia     = document.createElement('a');       
        const videoPhotograph   = document.createElement('video');
        const sourceVideo       = document.createElement('source');
        const divContenairTitle = document.createElement('div');
        const p1                = document.createElement('p');
        const divLike           = document.createElement('div');
        const p2                = document.createElement('p');
        const imageHeart        = document.createElement('img');
        const imageHeartId      = document.getElementsByClassName('heart_icone-media_' + id);
        const likesOfVideoId    = document.getElementsByClassName('counter_like-media_' + id);        
        article.className           = ('article_media');
        videoPhotograph.className   = ('video_photographer');
        videoPhotograph.setAttribute  ('tabindex', '0'); 
        sourceVideo.setAttribute      ('src', videoPhotographer);
        sourceVideo.setAttribute      ('type', 'video/mp4');
        sourceVideo.setAttribute      ('alt',videoTitle +',' +' ' + 'vidéo réalisée par'+' ' + name);     
        divContenairTitle.className = ('conteneur_title_likes');
        p1.textContent              = videoTitle;
        p1.className                = ('media_title');
        p1.setAttribute               ('tabindex', '0');                                
        divLike.className           = ('like_numbers');
        divLike.setAttribute          ('tabindex', '0');
        p2.textContent              = likes;
        p2.className                = ('counter_like-media counter_like-media_' + id);
        imageHeart.setAttribute       ('src', heartIcone);
        imageHeart.className        = ('heart_icone-media heart_icone-media_' + id);
        mediaSection.appendChild(article);
        article.appendChild(linkOpenMedia);
        linkOpenMedia.appendChild(videoPhotograph);
        videoPhotograph.appendChild(sourceVideo);
        article.appendChild(divContenairTitle);
        videoPhotograph.after(divContenairTitle);
        divContenairTitle.appendChild(p1);
        divContenairTitle.appendChild(divLike);
        article.appendChild(divContenairTitle);
        divLike.appendChild(p2);
        divLike.appendChild(imageHeart);
        const allLikes = document.getElementsByClassName('total_hearts');

            ///////// incrémentation des likes au click sur les articles video et ajout dans l'encart total  ///////////
            imageHeartId[0].addEventListener('click', () => {
                allLikes[0].textContent++
                likesOfVideoId[0].textContent++
                //console.log(likesOfVideoId[0].textContent)
            })

            ///////// ouverture lightbox video au click (lightbox.js) ///////////
            linkOpenMedia.addEventListener('click',() => {
                openLightBox(media,photographer);                                                    
            });

            //////// incrémentation des likes touche entrée sur les articles video et ajout dans l'encart total   /////////
            divLike.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    allLikes[0].textContent++
                    likesOfVideoId[0].textContent++                       
                }                  
            })
            
            ///////// ouverture lightbox video touche entrée  (lightbox.js) ///////////             /// !!!!!se répète quand on réappui sur entrée!!!!!!!!
            linkOpenMedia.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    openLightBox(media,photographer);                   
                }                  
            })

    }
     return { getPhotographerMediaDOM }
}
