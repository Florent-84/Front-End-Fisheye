
function mediaFactory(data, photographer) {
                                                                                                       
    const { id, photographerId, video, videoTitle, title, image, likes, date, price } = data;
    const { name }          = photographer;
    const firstName         = name.slice(0, name.indexOf(' ')); 
    const imagePhotographer = (`../../assets/photographers/${firstName}/${image}`);  
    const videoPhotographer = (`../../assets/photographers/${firstName}/${video}`);    
    const heartIcone        = (`../../assets/icons/heart-solid.svg`);                 
   

    function getPhotographerMediaDOM() {
        
        if (data.image) {
            getPhotographerPhotoDOM();           
        } else {
             getPhotographerVideoDOM();
        }

    }

     ///////////////////////////////////// affichage des photos et div compteurs des coeurs ///////////////////////////
    function getPhotographerPhotoDOM() {                                      
        
        const mediaSection      = document.getElementById('media_section');
        const article           = document.createElement('article');
        const img               = document.createElement('img');
        const imgLink           = document.createElement('a');
        const divContenairTitle = document.createElement('div');
        const p1                = document.createElement('p');
        const divLike           = document.createElement('div');
        const p2                = document.createElement('p');
        const imageHeart        = document.createElement('img');
        const divCounter        = document.createElement('div');
        const divAllHeart       = document.createElement('div');
        const imageAllHeart     = document.createElement('img');
        const divPrice          = document.createElement('div');
        const imgcroix          = document.getElementById('croix-image');
  
        article.className           = ('article_media');                      
        img.className               = ('image_photographer');
        img.setAttribute              ('src',imagePhotographer);
        img.setAttribute              ('alt',title +',' +' ' + 'photo prise par'+' ' + name);
        img.setAttribute              ('tabindex', '6');     
        divContenairTitle.className = ('conteneur_title_likes');
        p1.textContent              = title;
        divLike.className           = ('like_numbers');
        p2.textContent              = likes;
        imageHeart.className        = ('heart_icone');
        imageHeart.setAttribute       ('src', heartIcone);
        imageHeart.setAttribute       ('alt','likes');
        divCounter.className        = ('counter_like');
        divCounter.setAttribute     = ('tabindex', '7');             
        divAllHeart.className       = ('all_heart_diplay');                          
        divAllHeart.textContent     = ('9999');  // total des coeurs à modifier (fonction)
        imageAllHeart.className     = ('heart');
        imageAllHeart.setAttribute    ('src',heartIcone);
        imageAllHeart.setAttribute    ('alt','likes');                              
        divPrice.className          = ('price'); 
        divPrice.textContent        = price + ('€'+ '/' +'jour');  

        mediaSection.appendChild(article);
        article.appendChild(imgLink);
        article.appendChild(divContenairTitle);
        img.after(divContenairTitle);
        imgLink.appendChild(img);
        divContenairTitle.appendChild(p1);
        divContenairTitle.appendChild(divLike);
        divLike.appendChild(p2);
        divLike.appendChild(imageHeart);
        mediaSection.appendChild(divCounter);
        divCounter.appendChild(divAllHeart);
        divAllHeart.appendChild(imageAllHeart);
        divAllHeart.appendChild(divPrice);
        
        //////////////////////////////////////////////// fonction ouverture lightbox image /////////////////////////// 
        imgLink.addEventListener ('click',() => {                                              

            
            const carroussel            = document.getElementById('carroussel');
            const carrousselBox         = document.getElementById('carroussel-box');
            const imgPhotographer       = document.createElement('img');
            const chevronLeft           = document.getElementsByClassName('chevron-left');
            const chevronRight          = document.getElementsByClassName('chevron-right');
            const titrePhoto            = document.createElement('div');

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
        const videoPhotograph   = document.createElement('video');
        const sourceVideo       = document.createElement('source');
        const divContenairTitle = document.createElement('div');
        const p1                = document.createElement('p');
        const divLike           = document.createElement('div');
        const p2                = document.createElement('p');
        const imageHeart        = document.createElement('img');
        const imgcroix          = document.getElementById('croix-image');
       
        article.className           = ('article_media');
        videoPhotograph.className   = ('video_photographer');
        videoPhotograph.setAttribute  ('tabindex', '5'); 
        sourceVideo.setAttribute      ('src', videoPhotographer);
        sourceVideo.setAttribute      ('type', 'video/mp4');
        sourceVideo.setAttribute      ('alt',videoTitle +',' +' ' + 'vidéo réalisée par'+' ' + name);     
        divContenairTitle.className = ('conteneur_title_likes');
        p1.textContent              = videoTitle;
        divLike.className           = ('like_numbers');
        p2.textContent              = likes;
        imageHeart.setAttribute       ('src', heartIcone);
        imageHeart.className        = ('heart_icone');

        videoPhotograph.appendChild(sourceVideo);
        mediaSection.appendChild(article);
        article.appendChild(videoPhotograph);
        article.appendChild(divContenairTitle);
        videoPhotograph.after(divContenairTitle);
        divContenairTitle.appendChild(p1);
        divContenairTitle.appendChild(divLike);
        divLike.appendChild(p2);
        divLike.appendChild(imageHeart);

        /////////////////////////////////////////////////// fonction ouverture lightbox video ////////////////////////// 
        videoPhotograph.addEventListener ('click',() => {                                      

            
            const carroussel            = document.getElementById('carroussel');
            const carrousselBox         = document.getElementById('carroussel-box');
            const videoLightbox         = document.createElement('video');
            const chevronLeft           = document.getElementsByClassName('chevron-left');
            const chevronRight          = document.getElementsByClassName('chevron-right');
            const titreVideo            = document.createElement('div');

            titreVideo.className            = ('title-lightbox');
            titreVideo.textContent          = videoTitle;
            chevronLeft[0].style.display    = 'none';
            chevronRight[0].style.display   = 'none';     
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
     return { getPhotographerMediaDOM}
}