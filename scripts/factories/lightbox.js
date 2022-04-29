
/************************************************** fonction de l'ouverture de la lightbox  *******************************************************/
 
// eslint-disable-next-line no-unused-vars
function getOpenLightBox(media,photographer,currentPhotographMedias) {
     
  const { name }              = photographer;
  const firstName             = name.slice(0, name.indexOf(' ')); 
  const mediaSection          = document.getElementById('media_section');
  const carroussel            = document.getElementById('carroussel');
  const carrousselBox         = document.getElementById('carroussel-box');
  const chevronLeft           = document.getElementsByClassName('chevron-left')[0];
  const chevronRight          = document.getElementsByClassName('chevron-right')[0];
  const imgcroix              = document.getElementById('croix-image');
  const imgPhotographer       = document.createElement('img');
  const videoLightbox         = document.createElement('video');
  const titreLightbox         = document.createElement('div');
  imgPhotographer.className   = ('lightbox');
  videoLightbox.className     = ('lightbox');
  titreLightbox.className     = ('title-lightbox');
  titreLightbox.setAttribute  ('tabindex','0');
  imgcroix.setAttribute         ('tabindex','0');
  chevronLeft.style.display   = 'block';
  chevronLeft.setAttribute      ('tabindex', '0');
  chevronRight.style.display  = 'block'; 
  chevronRight.setAttribute     ('tabindex', '0');
  carroussel.style.display    ='block';
  carroussel.style.display    ='flex';
  mediaSection.style.display  ='none';

  function closeLightbox() {
    carroussel.style.display      ='none';
    mediaSection.style.display    ='flex';
    imgPhotographer.style.display ='none';
    videoLightbox.style.display   ='none';
    titreLightbox.style.display   ='none';
  }

  function renderLightboxMedia(index) {
    const lightboxMedia = currentPhotographMedias[index];
    if (lightboxMedia.image) {

      /** photo **/    
      imgPhotographer.setAttribute('tabindex', '0');
      imgPhotographer.setAttribute('src',`../../assets/photographers/${firstName}/${currentPhotographMedias[indexOfMedia].image}`);
      titreLightbox.textContent   = currentPhotographMedias[indexOfMedia].title;
      carrousselBox.appendChild(imgPhotographer);
      carrousselBox.appendChild(titreLightbox);

      /**** fermeture lightbox au click  ******/
      imgcroix.addEventListener('click', closeLightbox);

      /**** fermeture lightbox touche entrée  ******/
      imgcroix.addEventListener('keydown',(e) => {
        if (e.key === 'Enter') {
          closeLightbox();
        }
      });
   
    } else {
    /** video **/
      videoLightbox.setAttribute('tabindex', '0');
      videoLightbox.setAttribute('src',`../../assets/photographers/${firstName}/${currentPhotographMedias[indexOfMedia].video}`);
      videoLightbox.controls    = 'true';
      titreLightbox.textContent = currentPhotographMedias[indexOfMedia].title;
      carrousselBox.appendChild(videoLightbox);
      carrousselBox.appendChild(titreLightbox);

      /**** fermeture lightbox au click  ******/
      imgcroix.addEventListener('click', closeLightbox);

      /**** fermeture lightbox touche entrée  ******/
      imgcroix.addEventListener('keydown',(e) => {
        if (e.key === 'Enter') {
          closeLightbox();
        }
      });     
    }
  }

  function removeLightboxContent(previousIndexOfMedia) {
    const lightboxPreviousMedia = currentPhotographMedias[previousIndexOfMedia];
        
    if (lightboxPreviousMedia.image) {
      carrousselBox.removeChild(imgPhotographer);
    }
    else {
      carrousselBox.removeChild(videoLightbox);
    }   
  }

  /******* index des medias *****/  
  let indexOfMedia = currentPhotographMedias.indexOf(media);   
  renderLightboxMedia(indexOfMedia);
   
  /********* défilement à droite au clic *********/
  chevronRight.addEventListener('click',() => {  
    const previousIndexOfMedia = indexOfMedia        
    indexOfMedia++;
    if (indexOfMedia === currentPhotographMedias.length) {
      indexOfMedia = 0;
    }
    removeLightboxContent(previousIndexOfMedia);
    renderLightboxMedia(indexOfMedia);
  });

  /** défilement à droite avec la flèche droite du clavier **/
  chevronRight.addEventListener('keydown',(e) => {  
    const previousIndexOfMedia = indexOfMedia
    if (e.keyCode === '39') {
      indexOfMedia++;
      if (indexOfMedia === currentPhotographMedias.length) {
        indexOfMedia = 0;
      }
      removeLightboxContent(previousIndexOfMedia);
      renderLightboxMedia(indexOfMedia);
    }            
  });

  /********* défilement à gauche au clic ********/
  chevronLeft.addEventListener('click',() => { 
    const previousIndexOfMedia = indexOfMedia
    indexOfMedia--;
    if (indexOfMedia < 0) {
      indexOfMedia = currentPhotographMedias.length -1;
    }
    removeLightboxContent(previousIndexOfMedia);
    renderLightboxMedia(indexOfMedia);                     
  });

  /** défilement à gauche avec la flèche gauche du clavier **/
  chevronLeft.addEventListener('keydown',(e) => { 
    const previousIndexOfMedia = indexOfMedia
    if (e.keyCode === '37') {

      indexOfMedia--;
      if (indexOfMedia < 0) {
        indexOfMedia = currentPhotographMedias.length -1;
      }
      removeLightboxContent(previousIndexOfMedia);
      renderLightboxMedia(indexOfMedia); 
    }                    
  });          
}