                                            
function photographerFactory(data) {
  
  const { name, id, city, country, tagline, price, portrait } = data;
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
    
    //implémentation des éléments dans l'article
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
    h1.setAttribute('tabindex', '2');
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

    buttonContact.addEventListener('click',(e) => {
      displayModal(name);                                                   // appel de la fonction modale du contactForm.js
      e.preventDefault();  
    });

    return (photographHeader);
  }

  return { name, picture, getUserCardDOM, getPhotographerHeaderDOM }
}