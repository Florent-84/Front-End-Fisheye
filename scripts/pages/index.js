
async function getPhotographers() {

    /**** fetch pour aller chercher les datas du .json **********/
    return fetch('../../data/photographers.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        return(data);
    })
 
}

async function displayData(photographers, media) {
    
    const photographersSection = document.querySelector(".photographer_section");
    const filter = document.getElementById('name');   // filtre "trier par" 
	let params = (new URL(document.location)).searchParams;
    let idPhotographe = params.get('id');
    let currentPhotographMedias = [];

    photographers.forEach((photographer) => {
        
		const photographerModel = photographerFactory(photographer);

		if (idPhotographe) {
            
            if (photographer.id == idPhotographe) {
               
	            photographerModel.getPhotographerHeaderDOM();
                let photographerMediaLikes = 0;
                
                /******** filtrer les medias du photographe ************/
                currentPhotographMedias = media.filter((media) => {
                                     
                   return  media.photographerId == idPhotographe
            
                })

                /************* filtre de tri  *****************/
                filter.addEventListener('change', function () {
                    console.log(filter.value)

                    if (filter.value == 'date') { 
                        currentPhotographMedias = currentPhotographMedias.sort((a, b) => {
                            return new Date(a.date) < new Date(b.date) ? 1 : -1;
                        });     
                    }
                
                    if (filter.value == 'titre') {
                        currentPhotographMedias = currentPhotographMedias.sort((a, b) => {
                            return a.title > b.title ? 1 : -1;            
                        })                        
                    }
            
                    if (filter.value == 'popularite') {
                        currentPhotographMedias = currentPhotographMedias.sort((a, b) => {
                            return a.likes < b.likes ? 1 : -1;           
                        });                 
                    }            
                });
            
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
		}
    });
};

async function init() {
    /******************** Récupère les datas des photographes *************/
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
};

init();