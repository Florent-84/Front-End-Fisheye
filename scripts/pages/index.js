
async function getPhotographers() {

    //fonction fetch pour aller chercher les datas du .json
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

	let params = (new URL(document.location)).searchParams;
    let idPhotographe = params.get('id');
    
    photographers.forEach((photographer) => {

		const photographerModel = photographerFactory(photographer);
    	
		if (idPhotographe) {
      
            if (photographer.id == idPhotographe) {
                
	            photographerModel.getPhotographerHeaderDOM();
                
                media.forEach((media) => {                       

                    if (idPhotographe == media.photographerId) {   

                        const photographerMedia = mediaFactory(media, photographer);
                        photographerMedia.getPhotographerMediaDOM();
                            
                    }
                })
            }
		
		} else {

            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
            
		}
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
};

init();
