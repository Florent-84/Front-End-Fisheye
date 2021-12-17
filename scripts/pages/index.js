
   async function getPhotographers() {
    
    fetch('data/photographers.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
 
    // Penser à remplacer par les données récupérées dans le json
    const photographers = [
       /* {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },*/
        {
			"name": "Mimi Keel",
			"id": 243,
			"city": "London",
			"country": "UK",
			"tagline": "Voir le beau dans le quotidien",
			"price": 400,
			"portrait": "MimiKeel.jpg"
		},
		{
			"name": "Ellie-Rose Wilkens",
			"id": 930,
			"city": "Paris",
			"country": "France",
			"tagline": "Capturer des compositions complexes",
			"price": 250,
			"portrait": "EllieRoseWilkens.jpg"
		},
		{
			"name": "Tracy Galindo",
			"id": 82,
			"city": "Montreal",
			"country": "Canada",
			"tagline": "Photographe freelance",
			"price": 500,
			"portrait": "TracyGalindo.jpg"
		},
		{
			"name": "Nabeel Bradford",
			"id": 527,
			"city": "Mexico City",
			"country": "Mexico",
			"tagline": "Toujours aller de l'avant",
			"price": 350,
			"portrait": "NabeelBradford.jpg"
		},
		{
			"name": "Rhode Dubois",
			"id": 925,
			"city": "Barcelona",
			"country": "Spain",
			"tagline": "Je crée des souvenirs",
			"price": 275,
			"portrait": "RhodeDubois.jpg"
		},
		{
			"name": "Marcel Nikolic",
			"id": 195,
			"city": "Berlin",
			"country": "Germany",
			"tagline": "Toujours à la recherche de LA photo",
			"price": 300,
			"portrait": "MarcelNikolic.jpg"
		}
    ]
    // et bien retourner le tableau photographers seulement une fois
   return {
      //photographers: [[0],[1],[2],[3],[4],[5]]})
      photographers}
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();