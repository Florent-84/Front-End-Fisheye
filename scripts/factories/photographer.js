
class Photographer {
  constructor (id) {
    this.id = id.id
    this.name = id.name
    this.city = id.city
    this.country = id.country
    this.tagline = id.tagline
    this.price = id.price
    this.portrait = id.portrait
  }

  photographerFactory() {

      const picture =  (`assets/photographers/Photographers ID Photos/${this.portrait}`);
      //création DOM
      const article = document.createElement( 'article' );
      const img = document.createElement( 'img' );
      const h2 = document.createElement( 'h2' );
      const villePays = document.createElement('p');
      const phrasePhotographe = document.createElement('p');
      const tarif = document.createElement('p');
      const lienPhotographe = document.createElement('a');
      
      img.setAttribute("src",picture);
      img.setAttribute('role', 'img' );
      img.setAttribute('alt',"photo de " + this.name);
   
      h2.textContent = this.name;
      villePays.textContent = this.city + [", "]+ this.country;
      phrasePhotographe.textContent = this.tagline;
      phrasePhotographe.className = "phrase_photographe";
      tarif.textContent = this.price + ["€"+ "/" +"jour" ];
      tarif.className = "tarif_photographe";
      lienPhotographe.href = `photographer.html?id=${this.id}`;
      lienPhotographe.setAttribute('aria-label',"profil de " + this.name);
      //lienPhotographe.setAttribute("tabindex",tabIndex);
      
      //implémentation des éléments dans l'article
      article.appendChild(lienPhotographe);
      article.appendChild(villePays);
      article.appendChild(phrasePhotographe);
      article.appendChild(tarif);
      lienPhotographe.appendChild(img);
      lienPhotographe.appendChild(h2);
         
      return (article);
  }
}