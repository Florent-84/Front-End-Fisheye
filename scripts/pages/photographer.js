//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams;
let idPhotographe = params.get('id');
console.log(idPhotographe)

//init()

class Media {
  constructor(photographers){
    this.photographers = photographers
    console.log(photographers)
  }
   /* constructor (id) {
      this.id = id.id
      this.photographeId = id.photographeId
      this.titre = id.titre
      this.image = id.image
      this.video = id.video
      this.likes = id.likes
      this.date = id.date
      this.prix = id.prix
      this.description = id.description
    }*/

    displayMedias() {
      const picture = `assets/photographers/Photographers ID Photos/${this.portrait}`;
      console.log(picture)
      //création DOM
      const photographHeader = document.querySelector('.photograph-header');
      //divPhoto = document.createElement ('div');
      //imgProfil = document.createElement ('img');

      imgProfil.setAttribute("src", picture );
      imgProfil.setAttribute('role', 'img' );
      imgProfil.setAttribute('alt',picture);
 
      divPhoto.className = '.image-photographe';
      imgProfil.style.borderRadius = '50%';
      divPhoto.style.borderRadius = '50%';
      divPhoto.style.width = '200px';
      divPhoto.style.height = '200px';
      divPhoto.style.backgroundColor = 'red';
     
     
      photographHeader.appendChild(divPhoto);
      divPhoto.appendChild(imgProfil);
      console.log(photographHeader);

     return (photographHeader);

    }
}





