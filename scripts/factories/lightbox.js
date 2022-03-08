
////////////////////////////////////////////////////////////// fonction de l'ouverture de la lightbox  /////////////////////////////////////////////////
 
function openLightBox(media,photographer) { 
    
    const { id, photographerId, video, videoTitle, likes, title, image, date, price } = media;
    const { name }          = photographer;
    const firstName         = name.slice(0, name.indexOf(' ')); 
    const imagePhotographer = (`../../assets/photographers/${firstName}/${image}`);  
    const videoPhotographer = (`../../assets/photographers/${firstName}/${video}`);    
      
    // const articleMedia = document.getElementsByClassName('article_media');
    // console.log(articleMedia) 

    if(media.image) {

        //////image/////
        const mediaSection          = document.getElementById('media_section');
        const carroussel            = document.getElementById('carroussel');
        const carrousselBox         = document.getElementById('carroussel-box');
        const imgPhotographer       = document.createElement('img');
        const chevronLeft           = document.getElementsByClassName('chevron-left');
        const chevronRight          = document.getElementsByClassName('chevron-right');
        const titrePhoto            = document.createElement('div');
        const imgcroix              = document.getElementById('croix-image');
        imgcroix.setAttribute             ('tabindex','0');
        titrePhoto.className            = ('title-lightbox');
        titrePhoto.textContent          = title;
        titrePhoto.setAttribute           ('tabindex','0');
        chevronLeft[0].style.display    = 'block';
        chevronLeft[0].setAttribute       ('tabindex', '0');
        chevronRight[0].style.display   = 'block'; 
        chevronRight[0].setAttribute      ('tabindex', '0');  
        imgPhotographer.className       = ('image_lightbox');
        imgPhotographer.setAttribute      ('tabindex', '0');
        carroussel.style.display        ='block';
        carroussel.style.display        ='flex';
        mediaSection.style.display      ='none';
        imgPhotographer.setAttribute      ('src',imagePhotographer);
        carrousselBox.appendChild(imgPhotographer);
        carrousselBox.appendChild(titrePhoto);
        

            ////////// click sur chevron droite ////////////                                     //faire defiler les autres media au click (à finir)
            // chevronRight[0].addEventListener('click',() => {     
            //     console.log('défilement à droite');                                                                                                    
            // })

            ////////// click sur chevron gauche ////////////
            // chevronLeft[0].addEventListener('click',() => { 
            //     console.log('défilement à gauche');                       
            //})  

                ////////////// fermeture lightbox au click  ///////////                                                                                                                                                                                                    
                imgcroix.addEventListener('click',() => {

                    carroussel.style.display      ='none';
                    mediaSection.style.display    ='flex';
                    imgPhotographer.style.display ='none';
                    titrePhoto.style.display      ='none';

                }) 

                        //////////// fermeture lightbox touche entrée //////////                                                                                                                                                                                                     
                        imgcroix.addEventListener('keydown',(e) => {

                        if (e.key === 'Enter') {
                            carroussel.style.display      ='none';
                            mediaSection.style.display    ='flex';
                            imgPhotographer.style.display ='none';
                            titrePhoto.style.display      ='none';
                        }
                    })
                

    } else  {

        ///////video//////
        const mediaSection      = document.getElementById('media_section');
        const carroussel            = document.getElementById('carroussel');
        const titreVideo            = document.createElement('div');
        const imgcroix              = document.getElementById('croix-image');
        const videoLightbox         = document.createElement('video');
        const chevronLeft           = document.getElementsByClassName('chevron-left');
        const chevronRight          = document.getElementsByClassName('chevron-right');
        const carrousselBox         = document.getElementById('carroussel-box');
        imgcroix.setAttribute            ('tabindex', '0');    
        titreVideo.className            =('title-lightbox');
        titreVideo.textContent          = videoTitle;
        titreVideo.setAttribute          ('tabindex', '0');
        chevronLeft[0].setAttribute      ('tabindex', '0');
        chevronRight[0].setAttribute     ('tabindex', '0');
        videoLightbox.className         =('video_lightbox');
        videoLightbox.setAttribute       ('src',videoPhotographer);
        videoLightbox.controls          = 'true';
        mediaSection.style.display      = 'none';
        carroussel.style.display        = "flex";
        carrousselBox.appendChild(videoLightbox);
        carrousselBox.appendChild(titreVideo);

            ////////// click sur chevron droite ////////////                        //faire defiler les autres media au click (à finir!!!!!!!!!)
            // chevronRight[0].addEventListener('click',() => {     
            //     console.log('défilement à droite');                                       
            // })

            ////////// click sur chevron gauche ////////////
            // chevronLeft[0].addEventListener('click',() => {     
            //     console.log('défilement à gauche');                                       
            // })  

                //////////// fermeture lightbox au click //////////                                                                                                                                                                                                     
                imgcroix.addEventListener('click',() =>{

                    carroussel.style.display      ='none';
                    mediaSection.style.display    ='flex';
                    videoLightbox.style.display   ='none';
                    titreVideo.style.display      ='none';  
                
                })

                      //////////// fermeture lightbox touche entrée //////////                                                                                                                                                                                                     
                      imgcroix.addEventListener('keydown',(e) => {

                        if (e.key === 'Enter') {
                            carroussel.style.display      ='none';
                            mediaSection.style.display    ='flex';
                            videoLightbox.style.display   ='none';
                            titreVideo.style.display      ='none';
                        }
                    })

    } 
}      