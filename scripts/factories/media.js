
function mediaFactory(data, photographer) {

    const { id, photographerId, video, videoTitle, title, image, likes, date, price } = data;
    const { name }          = photographer;
    const firstName         = name.slice(0, name.indexOf(' ')); 
    const imagePhotographer = (`../../assets/photographers/${firstName}/${image}`);  
    const videoPhotographer = (`../../assets/photographers/${firstName}/${video}`);    
    const heartIcone        = (`../../assets/icons/heart-solid.svg`);                 
    const mediaSection      = document.getElementById('media_section');

    function getPhotographerMediaDOM() {
        
        if (data.image) {
            getPhotographerPhotoDOM();           
        } else {
            getPhotographerVideoDOM();
        }

    }

    function getPhotographerPhotoDOM() {
       
    mediaSection
        .innerHTML += `<article class="article_media">                                                                   
                            <img class= "image_photographer" src="${imagePhotographer}" alt=" ">
                                <div class="conteneur_title_likes">
                                    <p>${title}</p>
                                      <div class="like_numbers">
                                         <p>${likes}</p>   
                                         <img class="heart_icone" src="${heartIcone}">                                             
                                      </div>                                     
                                </div>
                       </article>
                       <div class="counter_like">
                            <div class="all_heart_diplay">${999999}
                                <img class ="heart" src="assets/icons/heart-solid.svg" alt="likes">
                            </div>
                            <div class="price">${price}€/jour</div>
                        </div>           
                       </div>`;                                                       
    }

    function getPhotographerVideoDOM() {
       
    mediaSection
        .innerHTML += `<article class="article_media">
                            <video class="video_photographer" controls >  
                                <source src="${videoPhotographer}" type="video/mp4" alt="${name}">
                            </video>
                                <div class="conteneur_title_likes">
                                    <p>${videoTitle}</p>
                                        <div class="like_numbers">
                                            <p>${likes}</p>  
                                            <img class="heart_icone" src="${heartIcone}">        
                                        </div>                                          
                                </div>  
                      </article>`;                                                                           
    }
    return { getPhotographerMediaDOM }
}
