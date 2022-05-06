
/******************************************* ouverture du formulaire (avec sa fermeture image croix)***************************************************/

// eslint-disable-next-line no-unused-vars
function displayModal(photographer) {

  const modal              = document.getElementById("contact_modal");               // récupération des éléments
  const headerLogo         = document.getElementsByTagName("header")[0];                                                
  const headerPhotographer = document.getElementsByClassName("photograph-header")[0];
  const nameForm           = document.getElementsByClassName("name-for-form")[0];                            
  const filter             = document.getElementsByTagName("label")[0];                                          
  const mediaSection       = document.getElementById("media_section");                               
  const firstNameInput     = document.getElementById("prenom");
  const lastNameInput      = document.getElementById("nom");
  const emailInput         = document.getElementById("email");
  const messageInput       = document.getElementById("message");
  const errorFirst         = document.getElementById("error-first");                 // les balises d'erreur
  const errorLast          = document.getElementById("error-last");
  const errorMail          = document.getElementById("error-email");
  const errorMessage       = document.getElementById("error-message");
  const btnSubmit          = document.getElementsByClassName("contact_button")[1];
  const imgCloseModal      = document.getElementById('close-form-img');              // croix de la fermeture modal    
  const regexFirstLast     = /^[A-Za-z]{2,30}$/;                                     // les regex  
  const regexEmail         = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; 
  const regexMessage       = /^[a-zA-Z0-9-_.\s]{2,30}$/;                                  

  modal.style.display                 = "block";                           // affiche la modale
  headerLogo.style.display            = "none";                            // cache le header avec logo
  headerPhotographer.style.display    = "none";                            // cache le header du photographe 
  filter.style.display                = "none";                            // cache le filtre 
  mediaSection.style.display          = "none";                            // cache la section media
  nameForm.className                  = "name-for-form";
  nameForm.innerHTML                  = "Contactez moi<br>"+ photographer;
  nameForm.setAttribute                 ('tabindex', '0');

  /*** fonction pour réafficher tous les éléments du photographe et enlever la modale ***/
  function redisplayElements() {                                                  
    modal.style.display              = 'none'; // cache la modale 
    headerLogo.style.display         = 'flex'; // affiche header avec logo                                 
    headerPhotographer.style.display = 'flex'; // affiche le header du photographe                            
    filter.style.display             = "flex"; // affiche le filtre                           
    mediaSection.style.display       = "flex"; // affiche la section media                                                                 
  }

  /*** fonction pour enlever les balises erreurs et vider les champs du formulaire ***/
  function resetForm() { 
    firstNameInput.value       = " ";
    lastNameInput.value        = " ";
    emailInput.value           = " ";
    messageInput.value         = " ";
    errorFirst.style.display   = "none";      
    errorLast.style.display    = "none";
    errorMail.style.display    = "none";
    errorMessage.style.display = "none";                                                        
  }

  /**** fonction fermeture du formulaire sur image croix au click ****/
  imgCloseModal.addEventListener('click', closeModal);
  function closeModal() {
    redisplayElements();
    resetForm();                                                                                       
  }
    
  /**** fonction fermeture du formulaire sur image croix avec touche entrée ****/
  imgCloseModal.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      closeModal();
    }
  });

  /*********************************** vérification des inputs du formulaire 1 par 1 au click submit *************************************/

  /***** controle du prénom et du nom (même regex) *****/                                                                     
  btnSubmit.addEventListener('click', validateFirstLast);                 
  function validateFirstLast(e) {                                            
    if (!regexFirstLast.test(firstNameInput.value && lastNameInput.value)) {
      e.preventDefault();
      errorFirst.style.display  = "block";
      errorLast.style.display   = "block";
    } if (regexFirstLast.test(firstNameInput.value)) {
      errorFirst.style.display  = "none";
      console.log("prénom : " + firstNameInput.value);
    } if (regexFirstLast.test(lastNameInput.value)) {
      errorLast.style.display   = "none";
      console.log("nom : " + lastNameInput.value);    
    }      
  }

  /************* controle de l'email **************/     
  btnSubmit.addEventListener('click', validateMail);                           
  function validateMail(e) {                                                   
    if (!regexEmail.test(emailInput.value)) {
      e.preventDefault();
      errorMail.style.display = "block";
    } else {
      errorMail.style.display = "none";
      console.log("Email : " + emailInput.value);    
    }
  }

  /************** controle du  message ***************/
  btnSubmit.addEventListener('click', validateMessage);                        
  function validateMessage(e) {                                                
    if (!regexMessage.test(messageInput.value)) {
      e.preventDefault();                          
      errorMessage.style.display = "block";               
    } else {
      errorMessage.style.display = "none";
      console.log("Message : " + messageInput.value);  
    }    
  }
        
  /** contrôle de tous les inputs au submit **/    
  btnSubmit.addEventListener('click', (e) => {                                             
    e.preventDefault();
    if (regexFirstLast.test(firstNameInput.value && lastNameInput.value) && (regexEmail.test(emailInput.value)) && (regexMessage.test(messageInput.value))) {
      redisplayElements();
      resetForm();
    } else {
      console.error('Formulaire non valide');
    }        
  });
}