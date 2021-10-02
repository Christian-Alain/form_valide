// validation d'un formulaire

myform.addEventListener('submit', function(verifie){

    var name = document.getElementById("nom");
    var myform = document.getElementById("myform");
    var email = document.getElementById("mail").value;
    var motDePass = document.getElementById("motdepass");
    var confPass = document.getElementById("confpass");
    var parten = /^[^]+@[^]+\.[A-Z]{2,3}$/;
    var erreur = document.getElementById('erreur');

   
        if(name.value == ""){
            alert('entrer un nom');
            
            // erreur.innerHTML = "entrer un nom";
            // erreur.style.color = "red";
            verifie.preventDefault();
        }
        if(email == ""){
            // erreur.innerHTML = "veuillez entrer un email";
            // erreur.style.color = "red";
            alert('Mettez une adresse email valide.');
            verifie.preventDefault();
        }
        else if(parten.test(email) ){
            // erreur.innerHTML ='Mettez une adresse email valide.';
            // erreur.style.color = "red";
            alert('Mettez une adresse email valide.');
            verifie.preventDefault();
        }
        
        if((motDePass == "")  &&  (confPass == "")){
            // erreur.innerHTML = "entrer un mot de passe";
            // erreur.style.color = "red";
            alert("entrer un mot de passe");
            verifie.preventDefault();

        }
        else  if((motDePass == "")  ||  (confPass == "")){
            // erreur.innerHTML = "entrer un mot de passe";
            // erreur.style.color = "red";
            alert("entrer un mot de passe");
            verifie.preventDefault();

        }
        else  if(motDePass != confPass){
            // erreur.innerHTML = "Vos de mot de passe doivent etre identique";
            // erreur.style.color = "red";
            alert("Vos de mot de passe doivent etre identique");
            verifie.preventDefault();

        }

        else{
            erreur.innerHTML = "Tous les champs doivent etre renseigner";
        }

});