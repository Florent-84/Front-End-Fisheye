function photographerFactory(data) {
    
    const { name, id, city, country, tagline, price, portrait, } = data;
    //console.log(data);

    //récuperation du chemin dossier des photographes
    const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture );
        img.setAttribute('role', 'img' );
        img.setAttribute('alt',' ');

        //titre du photographe
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute('aria-label',"profil de " + name);

        //création des liens et redirection vers profil des photographes avec leur id data
        const lienPhotographe = document.createElement('a');
        lienPhotographe.setAttribute('href', `photographer.html?id=${id}`); 
        lienPhotographe.setAttribute('aria-label',"profil de " + name);
        //console.log(lienPhotographe);
        
        //paragraphe qui contient la ville et le pays pour le descriptif du photographe
        const villePays = document.createElement('p');
        villePays.textContent = city + [", "]+ country;
        villePays.setAttribute('aria-label',"ville et pays");
     
        //phrase tagline du photographe avec paragraphe et son id 
        const phrasePhotographe = document.createElement('p');
        phrasePhotographe.id = "phrase_photographe";
        phrasePhotographe.textContent = tagline;
        phrasePhotographe.setAttribute('aria-label',"slogan du photographe");
     
        //tarif photographe avec un id et son prix
        const tarif = document.createElement('p');
        tarif.id = "tarif_photographe";
        tarif.textContent = price + ["€"+ "/" +"jour" ];
        tarif.setAttribute('aria-label',"tarif du photographe");
        
        //implémentation des éléments dans l'article
        article.appendChild(lienPhotographe);
        article.appendChild(villePays);
        article.appendChild(phrasePhotographe);
        article.appendChild(tarif);
        //implémentation du lien (a) avec image et titre du photographe
        lienPhotographe.appendChild(img);
        lienPhotographe.appendChild(h2);

        return (article);
    }
    return { getUserCardDOM}
}

