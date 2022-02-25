
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
        const linkMedia         = document.createElement('a');
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
        article.appendChild(linkMedia);
        article.appendChild(divContenairTitle);
        
        linkMedia.appendChild(img);
        divContenairTitle.appendChild(p1);
        divContenairTitle.appendChild(divLike);
        divLike.appendChild(p2);
        divLike.appendChild(imageHeart);

        //incrémentation des likes sur médias
        imageHeartId[0].addEventListener('click', () => {
            likesOfPhotoId[0].textContent++ 
            console.log(likesOfPhotoId[0].textContent)
        })

        //////////////////////////////////////////////// fonction ouverture lightbox image /////////////////////////// 
        article.addEventListener ('click',() => {                                              
            
            const articleMedia = document.getElementsByClassName('article_media');
            console.log(articleMedia)
            const carroussel            = document.getElementById('carroussel');
            const carrousselBox         = document.getElementById('carroussel-box');
            const imgPhotographer       = document.createElement('img');
            const chevronLeft           = document.getElementsByClassName('chevron-left');
            const chevronRight          = document.getElementsByClassName('chevron-right');
            const titrePhoto            = document.createElement('div');
            const imgcroix          = document.getElementById('croix-image');
            titrePhoto.className            = ('title-lightbox');
            titrePhoto.textContent          = title;
            chevronLeft[0].style.display    = 'block';
            chevronRight[0].style.display   = 'block';   
            imgPhotographer.className       =('image_lightbox');
            imgPhotographer.setAttribute     ('src',imagePhotographer);
            mediaSection.style.display      = 'none';
            carroussel.style.display        = "flex";
            carrousselBox.appendChild(imgPhotographer);
            carrousselBox.appendChild(titrePhoto);
            
                ////////// évènement sur chevron droite /////////                                     //faire defiler les autres media au click (à finir)
                // chevronRight[0].addEventListener('click',() => { 

                //         console.log('test');                       
                
                //  })
                        ////////////// fermeture lightbox ///////////                                                                                                                                                                     
                        imgcroix.addEventListener('click',() => { 
                    
                            carroussel.style.display      ='none';
                            mediaSection.style.display    ='flex';
                            imgPhotographer.style.display ='none';
                            titrePhoto.style.display      ='none';
                        
                        })                   
        })
   
    }
    
    ///////////////////////////////////////////////////// affichage des videos /////////////////////////////////////
    function getPhotographerVideoDOM() {                                                       
        
        const mediaSection      = document.getElementById('media_section');
        const article           = document.createElement('article');
        const linkMedia         = document.createElement('a');
        const videoPhotograph   = document.createElement('video');
        const sourceVideo       = document.createElement('source');
        const divContenairTitle = document.createElement('div');
        const p1                = document.createElement('p');
        const divLike           = document.createElement('div');
        const p2                = document.createElement('p');
        const imageHeart        = document.createElement('img');
        const imgcroix          = document.getElementById('croix-image');
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
 
        videoPhotograph.appendChild(sourceVideo);
        videoPhotograph.appendChild(linkMedia)
        mediaSection.appendChild(article);
        article.appendChild(videoPhotograph);
        article.appendChild(divContenairTitle);
        videoPhotograph.after(divContenairTitle);
        divContenairTitle.appendChild(p1);
        divContenairTitle.appendChild(divLike);
        divLike.appendChild(p2);
        divLike.appendChild(imageHeart);

        imageHeartId[0].addEventListener('click', () => {
            likesOfVideoId[0].textContent++
            console.log(likesOfVideoId[0].textContent)
        })

        /////////////////////////////////////////////////// fonction ouverture lightbox video ////////////////////////// 
        article.addEventListener ('click',() => {                                      
       
            const carroussel            = document.getElementById('carroussel');
            const carrousselBox         = document.getElementById('carroussel-box');
            const videoLightbox         = document.createElement('video');
            const chevronLeft           = document.getElementsByClassName('chevron-left');
            const chevronRight          = document.getElementsByClassName('chevron-right');
            const titreVideo            = document.createElement('div');

            titreVideo.className            = ('title-lightbox');
            titreVideo.textContent          = videoTitle;
            chevronLeft[0].style.display    = 'block';
            chevronRight[0].style.display   = 'block';     
            videoLightbox.className         =('video_lightbox');
            videoLightbox.setAttribute       ('src',videoPhotographer);
            videoLightbox.controls          = 'true';
            mediaSection.style.display      = 'none';
            carroussel.style.display        = 'flex';

            carrousselBox.appendChild(videoLightbox);
            carrousselBox.appendChild(titreVideo);
                
                //////////////////// fermeture lightbox //////////
                imgcroix.addEventListener('click',() => {                                      
             
                    carroussel.style.display    ='none';
                    mediaSection.style.display  ='flex';
                    videoLightbox.style.display ='none';
                    titreVideo.style.display    ='none';
                
                })                   
        }) 
       
    }
     return { getPhotographerMediaDOM }
}