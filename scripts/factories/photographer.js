                                          
function photographerFactory(photographer) {
  
  const { name, id, city, country, tagline, price, portrait } = photographer;
  const picture        = (`assets/photographers/Photographers ID Photos/${portrait}`);
  
  function getUserCardDOM() {
    
    const article           = document.createElement( 'article' );
    const img               = document.createElement( 'img' );
    const h2                = document.createElement( 'h2' );
    const villePays         = document.createElement('p');
    const phrasePhotographe = document.createElement('p');
    const tarif             = document.createElement('p');
    const lienPhotographe   = document.createElement('a');
    
    img.setAttribute('src',picture);
    img.setAttribute('role', 'img' );
    img.setAttribute('alt','photo de ' + name);

    h2.textContent                = name;
    villePays.textContent         = city + [', ']+ country;
    phrasePhotographe.textContent = tagline;
    phrasePhotographe.className   = ('phrase_photographe');
    tarif.textContent             = price + ['€'+ '/' +'jour' ];
    tarif.className               = ('tarif_photographe');
    lienPhotographe.href          = (`photographer.html?id=${id}`);
    lienPhotographe.setAttribute('aria-label','profil de ' + name);
    
    article.appendChild(lienPhotographe);
    article.appendChild(villePays);
    article.appendChild(phrasePhotographe);
    article.appendChild(tarif);
    lienPhotographe.appendChild(img);
    lienPhotographe.appendChild(h2);
  
    return (article);
  }
  
  function getPhotographerHeaderDOM(){
 
    const photographHeader  = document.querySelector('.photograph-header');
    const h1                = document.createElement( 'h1' );
    const buttonContact     = document.querySelector('.contact_button');
    const imgProfil         = document.createElement('img');
    const villePays         = document.createElement('p');
    const phrasePhotographe = document.createElement('p');
    const div               = document.createElement('div');

    div.className                 = ('contenair-villepaysphrase');
    h1.textContent                = (name);
    villePays.textContent         = city + [', ']+ country;
    phrasePhotographe.textContent = tagline;
    phrasePhotographe.className   = ('header-phrase_photographe'); 
    imgProfil.className           = ('photograph-header_img');
    h1.setAttribute('tabindex', '0');
    imgProfil.setAttribute('src', picture);
    imgProfil.setAttribute('role', 'img' );
    imgProfil.setAttribute('alt',picture);

    photographHeader.appendChild(h1);
    photographHeader.appendChild(div);
    photographHeader.appendChild(villePays);
    photographHeader.appendChild(phrasePhotographe);
    photographHeader.appendChild(buttonContact);
    photographHeader.appendChild(imgProfil);
    div.appendChild(villePays);
    div.appendChild(phrasePhotographe);
    h1.appendChild(div);

    // appel de la fonction modale du contactForm.js
    buttonContact.addEventListener('click',(e) => {
      displayModal(name);                                                   
      e.preventDefault();  
    });

                /////////// encart tarif journalier du photographe /////////////////
                
                const heartIcone        = (`../../assets/icons/heart-solid2.svg`);
                const mediaSection      = document.getElementById('media_section');
                const divCounter        = document.createElement('div');
                const divAllHeart       = document.createElement('div');
                const imageAllHeart     = document.createElement('img');
                const divPrice          = document.createElement('div');
                const p3                = document.createElement('p');
    
                divCounter.className        = ('counter_like');
                divCounter.setAttribute     = ('tabindex', '0');
                imageAllHeart.className     = ('heart-total');
                imageAllHeart.setAttribute    ('src',heartIcone);
                imageAllHeart.setAttribute    ('alt','likes');
                divAllHeart.className       = ('all_heart_diplay');
                divPrice.className          = ('price'); 
                divPrice.textContent        = price + ('€'+ '/' +'jour');
                p3.className                = ('total_hearts');
                p3.textContent              = ('9999')           /// affichage total des coeurs ??????

                divAllHeart.appendChild(p3);
                divAllHeart.appendChild(imageAllHeart);
                divAllHeart.appendChild(divPrice);
                mediaSection.appendChild(divCounter);
                divCounter.appendChild(divAllHeart);   

    return (photographHeader);
  }

  return { getUserCardDOM, getPhotographerHeaderDOM }
}