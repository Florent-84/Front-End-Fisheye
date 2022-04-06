
/**************************************** encart tarif journalier et total des likes du photographe ********************************/

function getPhotographerMediaTotalLikes(totalLikes,photographer) {

    const { price }         = photographer;      
    const heartIconeBlack   = (`../../assets/icons/heart-solid2.svg`);
    const mediaSection      = document.getElementById('media_section');    
    const counter           = document.createElement('button');
    const divAllHeart       = document.createElement('div');
    const imageAllHeart     = document.createElement('img');
    const divPrice          = document.createElement('div');
    const p3                = document.createElement('p');

    counter.className           = ('counter_like');        
    imageAllHeart.className     = ('black-heart');
    imageAllHeart.setAttribute    ('src',heartIconeBlack);
    imageAllHeart.setAttribute    ('alt','likes');
    divAllHeart.className       = ('all_heart_display');
    divPrice.className          = ('price'); 
    divPrice.textContent        = price + ('€'+ '/' +'jour');
    divPrice.setAttribute       = ('tabindex', '0');
    p3.className                = ('total_hearts');
    p3.textContent              = totalLikes;                
    divAllHeart.appendChild(p3);
    divAllHeart.appendChild(imageAllHeart);
    divAllHeart.appendChild(divPrice);
    mediaSection.appendChild(counter);
    counter.appendChild(divAllHeart);

}   
