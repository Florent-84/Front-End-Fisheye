function photographerFactory(data) {
    
    const { name, id, city, country, tagline, price, portrait, } = data;
    console.log(data);

    //récuperation du chemin dossier des photographes
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture );
        //ajout attribut alt pour le nom des photographes dans les images  
        img.setAttribute("alt", name);
        console.log(img)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        //rajout d'un element p qui contient la ville et le pays pour le descriptif du photographe
        const villePays = document.createElement('p');
        villePays.textContent = city + [", "]+ country;
        console.log(villePays);

        //rajout de la phrase tagline avec un paragraphe et un id 
        const phrasePotographe = document.createElement('p')
        phrasePotographe.id = "phrase_photographe";
        phrasePotographe.textContent = tagline;
        console.log(phrasePotographe);

        //rajout tarif avec un paragraphe et son id
        const tarif = document.createElement('p')
        tarif.id = "tarif_photographe";
        tarif.textContent = price + ["€"+ "/" +"jour" ];
        console.log(tarif);
        
        article.appendChild(img);
        article.appendChild(h2);
        //implémentation des éléments dans l'article
        article.appendChild(villePays);
        article.appendChild(phrasePotographe);
        article.appendChild(tarif);

        return (article);
    }
    return { getUserCardDOM }
}
