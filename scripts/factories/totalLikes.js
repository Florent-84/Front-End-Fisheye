
/**************************************** encart tarif journalier et total des likes du photographe ********************************/

function getPhotographerMediaTotalLikes(totalLikes,photographer) {

    const { price }         = photographer;      
    const heartIconeBlack   = (`../../assets/icons/heart-solid2.svg`);
    const mediaSection      = document.getElementById('media_section');    
    const counter           = document.createElement('button');
    const divAllHeart       = document.createElement('div');
    const imageAllHeart     = document.createElement('img');
    const divPrice          = document.createElement('div');
    const h6                = document.createElement('h6');
    counter.className           = ('counter_like');        
    imageAllHeart.className     = ('black-heart');
    imageAllHeart.setAttribute    ('src',heartIconeBlack);
    imageAllHeart.setAttribute    ('alt','total-likes');
    divAllHeart.className       = ('all_heart_display');
    divPrice.className          = ('price'); 
    divPrice.textContent        = price + ('€'+ '/' +'jour');
    divPrice.setAttribute       = ('tabindex', '0');
    h6.className                = ('total_hearts');
    h6.textContent              = totalLikes;                
    divAllHeart.appendChild(h6);
    divAllHeart.appendChild(imageAllHeart);
    divAllHeart.appendChild(divPrice);
    mediaSection.appendChild(counter);
    counter.appendChild(divAllHeart);

}   
