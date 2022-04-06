
/*********************************** ouverture du formulaire *******************************************/

function displayModal(photographerName) {

    const modal              = document.getElementById("contact_modal");
    const headerLogo         = document.getElementsByTagName("header");                                                
    const headerPhotographer = document.getElementsByClassName("photograph-header");
    const h2                 = document.getElementsByTagName("h2");                             
    const filter             = document.getElementsByTagName("label");                                          
    const mediaSection       = document.getElementById("media_section");                               
    const firstNameInput     = document.getElementById("prenom");
    const lastNameInput      = document.getElementById("nom");
    const emailInput         = document.getElementById("email");
    const messageInput       = document.getElementById("message");
    const errorFirst         = document.getElementById("error-first");                              // les balises d'erreur
    const errorLast          = document.getElementById("error-last");
    const errorMail          = document.getElementById("error-email");
    const errorMessage       = document.getElementById("error-message");
    const btnSubmit          = document.getElementsByClassName("contact_button");    
    const regexFirstLast     = /^[A-Za-z]{2,30}$/;                                                  // les regex  
    const regexEmail         = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/; 
    const regexMessage       = /^[a-zA-Z0-9-_.]{2,30}$/;                                            // regex message

    modal.style.display                 = "block";                                                  // on affiche le formulaire
    headerLogo[0].style.display         = "none";                                                   // on cache le header avec logo
    headerPhotographer[0].style.display = "none";                                                   // on cache le header du photographe 
    filter[0].style.display             = "none";                                                   // on cache le filtre 
    mediaSection.style.display          = "none";                                                   // on cache la section media
    h2[0].innerHTML                     = `Contactez-moi<br>${photographerName}`;
    h2[0].setAttribute                    ('tabindex', '0');

    /************************** fonction pour vider toute les erreurs et tous les champs *****************************/
    function resetForm() {                                                          
        firstNameInput.value                = " ";                                                                                            
        lastNameInput.value                 = " ";
        emailInput.value                    = " ";
        messageInput.value                  = " ";
        errorFirst.style.display            = "none";
        errorLast.style.display             = "none";
        errorMail.style.display             = "none";
        errorMessage.style.display          = "none";
    }
    /************************** fonction pour réafficher les éléments et enlever la modale *****************************/
    function redisplayElements() {                                                  
        modal.style.display                 = "none";                                   
        headerLogo[0].style.display         = "block";                                  
        headerLogo[0].style.display         = "flex";
        headerPhotographer[0].style.display = "block";                                  
        headerPhotographer[0].style.display = "flex"; 
        filter[0].style.display             = "block";                                  
        mediaSection.style.display          = "block";                                  
        mediaSection.style.display          = "flex";                                                                 
    }

    /********************************************** vérification des inputs du formulaire au click submit ****************************************/

    /********** fonction controle du prénom et du nom ********/                                                                     
    btnSubmit[1].addEventListener('click', validateFirstLast);                 
        function validateFirstLast(e) {                                            
            if (!regexFirstLast.test(firstNameInput.value && lastNameInput.value)) {
                e.preventDefault();
                errorFirst.style.display  = "block";
                errorLast.style.display   = "block";
            } if (regexFirstLast.test(firstNameInput.value)) {
                errorFirst.style.display  = "none";
                console.log(firstNameInput.value);
            } if (regexFirstLast.test(lastNameInput.value)) {
                errorLast.style.display   = "none";
                console.log(lastNameInput.value);
                
            }      
        }

    /********** fonction controle de l'email ************/     
    btnSubmit[1].addEventListener('click', validateMail);                           
        function validateMail(e) {                                                   
            if (!regexEmail.test(emailInput.value)) {
                e.preventDefault();
                errorMail.style.display = "block";
            } else {
                errorMail.style.display = "none";
                console.log(emailInput.value);
                
            }
        }

    /************* fonction controle message **************/
    btnSubmit[1].addEventListener('click', validateMessage);                        
        function validateMessage(e) {                                                
            if (!regexMessage.test(messageInput.value)) {                          
                e.preventDefault();
                errorMessage.style.display = "block";                
            } else {
                errorMessage.style.display = "none";
                console.log(messageInput.value);
               
            }
            
        }
        
    /************************** on réaffiche les éléments quand le formulaire est valide *************************************/    
    btnSubmit[1].addEventListener('click', (e) => {                                  
           
        e.preventDefault();
            if (regexFirstLast.test(firstNameInput.value && lastNameInput.value) && (regexEmail.test(emailInput.value)) && (regexMessage.test(messageInput.value))) {
                redisplayElements()
                resetForm()
            }          
        })
    }
     
/************************************************ fonction fermeture du formulaire au ******************************************/
//(dans photographer.html  ==>>  onkeydown="if (event.keyCode == 13) fermeture modale sur touche entrée )   
function closeModal() {

    const modal              = document.getElementById("contact_modal");
    const headerLogo         = document.getElementsByTagName("header");                                                
    const headerPhotographer = document.getElementsByClassName("photograph-header");                             
    const filter             = document.getElementsByTagName("label");                                          
    const mediaSection       = document.getElementById("media_section");
    const firstNameInput     = document.getElementById("prenom");
    const lastNameInput      = document.getElementById("nom");
    const emailInput         = document.getElementById("email");
    const messageInput       = document.getElementById("message");
    const errorFirst         = document.getElementById("error-first");         // les balises d'erreur
    const errorLast          = document.getElementById("error-last");
    const errorMail          = document.getElementById("error-email");
    const errorMessage       = document.getElementById("error-message"); 

        /************* fonction pour vider toute les erreurs et tous les champs ****************/
        function resetForm() {                                                      
            firstNameInput.value                = " ";
            lastNameInput.value                 = " ";
            emailInput.value                    = " ";
            messageInput.value                  = " ";
            errorFirst.style.display            = "none";
            errorLast.style.display             = "none";
            errorMail.style.display             = "none";
            errorMessage.style.display          = "none";
        }

    modal.style.display                 = "none";                              // on cache la modale
    headerLogo[0].style.display         = "block";                             // on affiche header avec logo
    headerLogo[0].style.display         = "flex";
    headerPhotographer[0].style.display = "block";                             // on affiche le header du photographe 
    headerPhotographer[0].style.display = "flex"; 
    filter[0].style.display             = "block";                             // on affiche le filtre 
    mediaSection.style.display          = "block";                             // on affiche la section media
    mediaSection.style.display          = "flex";
    resetForm();
    
}