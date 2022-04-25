
async function getPhotographers() {

    /**** récupération du .json **********/
    return fetch('../../data/photographers.json')
        .then(function(response) {
    return response.json();
        })
        .then(function(data) {
    return(data);
        })

}
    
async function displayData(photographers, media) {

        const photographersSection = document.querySelector(".photographer_section");
        const filter               = document.getElementById('name');             // filtre "trier par" 
        let params                 = (new URL(document.location)).searchParams;
        let idPhotographe          = params.get('id');
        let sortedKey              = localStorage.getItem('sortedBy')
    
    /********* filtre "trier par" sur popularité de like par défaut *********/
    filter?.addEventListener('change', function () {

        localStorage.setItem('sortedBy', filter.value)
        location.reload()
    });
    
    photographers.forEach((photographer) => {

        const photographerModel = photographerFactory(photographer);
    
        if (idPhotographe) {

            if (photographer.id == idPhotographe) {

                photographerModel.getPhotographerHeaderDOM();
                let photographerMediaLikes = 0;
                /******** filtrer les medias du photographe ************/
                const currentPhotographMedias = media.filter((media) => { 
                    return media.photographerId == idPhotographe;
                })

                currentPhotographMedias.sort((a, b) => {
                    switch(sortedKey) { 
                        case 'date':
                        return new Date(a.date) < new Date(b.date) ? 1 : -1;
                        case 'titre':
                        return a.title > b.title ? 1 : -1;
                        default:
                        return a.likes < b.likes ? 1 : -1;
                    }
                })
            
                currentPhotographMedias.forEach((media) => { 

                    photographerMediaLikes += media.likes;
                    const photographerMedia = mediaFactory(media, photographer,currentPhotographMedias);
                    photographerMedia.getPhotographerMediaDOM();
                })
                    photographerModel.getPhotographerMediaTotalLikes(photographerMediaLikes,photographer);
            }

        } else {    
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
                localStorage.clear()
                }
    });
};

    
async function init() {
    
/******************** Récupère les datas des photographes *************/
const { photographers, media } = await getPhotographers();
displayData(photographers, media);
};
    
init();
    