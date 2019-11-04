const products = [
{
  id: '1',
  name: 'Iphone6',
  img: 'assets/images/photo1.jpg',
  price: '600',
  color: 'white',
  company: 'apple',
  description: 'lorem ipsum',

},
{
 id: '2',
  name: 'Iphone5',
  price: '600',
  img: 'assets/images/photo2.jpg',
  color: 'white',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '3',
  name: 'Iphone4',
  img: 'assets/images/photo3.jpg',
  price: '400',
  color: 'golden',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '4',
  name: 'Iphone6',
  img: 'assets/images/photo4.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '5',
  name: 'Iphone6',
  img: 'assets/images/photo4.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '6',
  name: 'Iphone6',
  img: 'assets/images/photo4.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

},
{
  id: '7',
  name:'Iphone6',
  img: 'assets/images/photo3.jpg',
  price: '300',
  color: 'gray',
  company: 'apple',
  description: 'lorem ipsum',

}
];


//Afficher tous les produits

var container = document.querySelector('.container');

products.forEach((produit) => {

  container.insertAdjacentHTML('afterbegin', `<div class="card-deck">
  <div class="card"  id="${produit.id}">
    <div class="card-header"><p><strong>${produit.price}€</strong></p>
      </div>
    <div class="card-body">
      <h4 class="card-title">${produit.company}</h4> 
      <h5 class="card-title"><b> ${produit.name}</b></h5>
       <img src="${produit.img}" class="card-img-top" alt=""> 
      <h5 class="card-title"><i>${produit.color}</i></h5>
      <p id="description"> ${produit.description}</p>
    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-danger" id="btnAcheter" data-toggle="modal"><i id="iconPanier"class="fas fa-cart-plus "><span> | ACHETER</span></i></button>
    </div>
  </div>`);

//Ajouter au panier

var modalAchat = document.querySelector('.form-group'); //selectionner le div dans la modal pour inserer les produits
var boutonAjouter = document.querySelector('#btnAcheter'); //selectionner le bouton ajouter

var i = 0
boutonAjouter.addEventListener('click',  (event) => {
    modalAchat.insertAdjacentHTML('afterbegin', `<li><p>${produit.name}</p><p>${produit.price}€</p></li>`);
    i++;
    document.getElementById("score").innerHTML = i; //Conteur de produits
    
  });
var boutonSupprimer = document.querySelector('#btnSupprimer');

//Supprimer des elements

boutonSupprimer.addEventListener('click',  (event) => {
  i = 0;
  document.getElementById("score").innerHTML = 0;
  modalAchat.innerHTML = "";

  });
});

// Selectionner le menu
          const menuFixe = document.getElementById('menu');

          //Créer une fonction pour fixer le menu
          function onScroll() {
             function fixer() {
                  // Stocker le nombre de pixels que se sont déplacés dans le document quand on fait scroll verticale
                  var y = window.scrollY;
                  // Créer une condition pour ajouter une class si la distance du scroll est superior à l'hauteur du menu (100px)
                   if (y > 150) {
                      menuFixe.classList.add("fixed-position");
                    } else {
                      menuFixe.classList.remove("fixed-position");
                    };
                };
            // Ajouter un micro à l'objet "window" pour executer la fonction "fixer" quand se produce l'evenement "scroll"
            window.addEventListener("scroll", fixer);      
          };

          onScroll();

          console.log('code JS chargé');

// CREER DES FONCTIONS POUR SE SIMPLIFIER LA VIE
// utilisation
// ajouterAction('button.delete', 'click', function(){ });
function ajouterAction (selecteurCSS, evenement, fonctionCallback)
{
    // recuperer la liste des balises à sélectionner
    // ajouter pour chaque balise un event listener
    var listeBalise = document.querySelectorAll(selecteurCSS);
    listeBalise.forEach(function(balise, indice){
        balise.addEventListener(evenement, fonctionCallback);
    });
}

// on peut créer une fonction qui va prendre en paramètre un objet formData
// et qui va envoyer une requête ajax
// et qui va appeler une fonction de callback pour gérer un objet JSON
function envoyerRequeteAjax (formData, fonctionCallback)
{
    fetch('api-json.php', {
        method: 'POST',
        body: formData
    })
    .then(function(reponseServeur) { 
        return reponseServeur.json();
    })
    .then(fonctionCallback);
}


function envoyerFormulaireAjax (event)
{
    // this
    // => une variable spéciale de JS
    // => elle a comme valeur this = element

    // bloque le formulaire
    event.preventDefault();
    // console.log('formulaire bloqué');

    // cool: je ne change plus de page
    // pas cool: je n'envoie plus les informations
    // => on va ajouter un appel à fetch
    // => permet d'envoyer un requête AJAX sans changer de page

    // avant d'envoyer la requête ajax
    // on va récuperer les infos remplies dans le formulaire
    console.log(this);
    // aspire les infos du formulaire
    var formData = new FormData(this);  // Programmation Orientée Objet
    // on va envoyer ces infos avec le fetch

    envoyerRequeteAjax(formData, (objetJS) => {
        // en utilisant une fonction fléchée
        // => avantage: je garde le this d'avant
        // cool: je peux manipuler un objet JS
        console.log(objetJS);
        if (objetJS.confirmation)
        {
            // je vais copier la valeur dans la balise div.confirmation
            console.log(this); // balise form     
            // dans ma balise form je vais chercher la balise div.confirmation
            this.querySelector(".confirmation").innerHTML = objetJS.confirmation;
        }

        if (objetJS.tabBlog)
        {
            // la fonction va créer le HTML pour afficher les articles
            creerHtmlBlog(objetJS.tabBlog);
        }
    });

}

ajouterAction('form.ajax', 'submit', envoyerFormulaireAjax);


var tabBlogUpdate = [];
function creerHtmlBlog (tabBlog)
{
    // mémoriser le tableau pour le update
    tabBlogUpdate = tabBlog;

    // vider la liste avant de la mettre à jour
    // insérer le code HTML dans la balise div.listeBlog
    var listeBlogAdmin = document.querySelector("div.listeAnnonce");
    
    // si il n'y a pas cette balise, alors on ne fait rien
    if (listeBlogAdmin == null) return;

    listeBlogAdmin.innerHTML = '';

    // parcourir le tableau
    tabBlog.forEach(function(article, indice){
        // je vais construire le HTML
        var codeHtmlArticle = `
            <article>
                <div class="categorie">${article.nom}</div>
                <img src="${article.photo}" alt="${article.photo}">
                <button class="delete" data-id="${article.id}" id="delete-${article.id}">supprimer</button>
                <button class="update" data-indice="${indice}" data-id="${article.id}" id="update-${article.id}">modifier</button>
            </article>
        `;

        listeBlogAdmin.insertAdjacentHTML('beforeend', codeHtmlArticle);
    });


    function modifierArticle (event)
    {
        console.log('tu as cliqué');
        console.log(this);  // this donne le bouton sur lequel on a cliqué

        // on va afficher la section.section-update
        var sectionUpdate = document.querySelector(".section-update");
        // on va ajouter la classe .afficher
        sectionUpdate.classList.add("afficher");

        // je vais pré-remplir le formulaire de update 
        // avec les infos de l'article dans le tableau
        // je vais récupérer data-indice
        var indice = this.getAttribute("data-indice");
        // je vais utiliser l'indice pour retrouver l'élément dans le tableau
        var article = tabBlogUpdate[indice];
        // debug
        console.log(article);

        // je vais pré-remplir les champs du formulaire d'update
        // id
        var inputId = document.querySelector('.section-update input[name=id]');
        inputId.value = article.id;
        // titre
        var inputTitre = document.querySelector('.section-update input[name=titre]');
        inputTitre.value = article.titre;
        // contenu
        var inputContenu = document.querySelector('.section-update textarea[name=contenu]');
        inputContenu.value = article.contenu;
        // photo
        var inputPhoto = document.querySelector('.section-update input[name=photo]');
        inputPhoto.value = article.photo;
        // datePublication
        var inputDatePublication = document.querySelector('.section-update input[name=datePublication]');
        inputDatePublication.value = article.datePublication;
        // photo
        var inputCategorie = document.querySelector('.section-update input[name=categorie]');
        inputCategorie.value = article.categorie;
    }
    ajouterAction('.listeBlogAdmin button.update', 'click', modifierArticle);

    function supprimerArticle (event)
    {
        // debug 
        console.log('tu as cliqué');
        console.log(this);  // this donne le bouton sur lequel on a cliqué

        // il faudrait pour pouvoir lancer la requête ajax
        // que je puisse retrouver id de la ligne à supprimer
        // on a préparé le HTML pour retrouver id dans l'attribut data-id
        var idLigne = this.getAttribute("data-id");
        console.log(idLigne);
        
        // on va envoyer une requête ajax vers api-json.php
        // et on va demander à supprimer cette ligne
        var formData = new FormData();
        // en JS, je remplis les infos nécessaires pour traiter le formulaire
        // https://developer.mozilla.org/fr/docs/Web/API/FormData/append#Syntaxe
        formData.append("idFormulaire", "blog-delete");
        formData.append("nomTable", "blog");
        formData.append("id", idLigne);

        envoyerRequeteAjax(formData, (objetJS) => {
            // en utilisant une fonction fléchée
            // => avantage: je garde le this d'avant
            // cool: je peux manipuler un objet JS
            console.log(objetJS);

            if (objetJS.tabBlog)
            {
                // la fonction va créer le HTML pour afficher les articles
                creerHtmlBlog(objetJS.tabBlog);
            }
        });

    }
    ajouterAction('.listeBlogAdmin button.delete', 'click', supprimerArticle);

}


// je veux récupérer la liste des articles
// dès le chargement de la page
// on va envoyer une requête ajax
// et récupérer la liste des articles
function chargerListeArticle ()
{
    console.log("chargerListeArticle");

    // on va envoyer une requête ajax vers api-json.php
    // et on va demander à supprimer cette ligne
    var formData = new FormData();
    // en JS, je remplis les infos nécessaires pour traiter le formulaire
    // https://developer.mozilla.org/fr/docs/Web/API/FormData/append#Syntaxe
    formData.append("idFormulaire", "blog-delete");
    formData.append("nomTable", "blog");
    formData.append("id", 0);   // on triche car id n'est jamais égal à 0

    envoyerRequeteAjax(formData, (objetJS) => {
        // en utilisant une fonction fléchée
        // => avantage: je garde le this d'avant
        // cool: je peux manipuler un objet JS
        console.log(objetJS);

        if (objetJS.tabBlog)
        {
            // la fonction va créer le HTML pour afficher les articles
            creerHtmlBlog(objetJS.tabBlog);
        }
    });

}

// appeler la fonction pour activer le code
chargerListeArticle();

// on ajoute un event listener sur la div.close
// pour enlever la classe afficher sur la section.section-update
function cacherPopup ()
{
    var sectionUpdate = document.querySelector('.section-update');
    sectionUpdate.classList.remove('afficher');
}
ajouterAction('.close', 'click', cacherPopup);





/*
// JE VAIS PRENDRE LE CONTROLE SUR LA BALISE form.ajax
var listeForm = document.querySelectorAll("form.ajax");
// ajouter un event listener sur l'événement submit
// pour chaque balise
listeForm.forEach(function(element){
    element.addEventListener("submit", function(event){
        // this
        // => une variable spéciale de JS
        // => elle a comme valeur this = element
        // bloque le formulaire
        event.preventDefault();
        // console.log('formulaire bloqué');
        // cool: je ne change plus de page
        // pas cool: je n'envoie plus les informations
        // => on va ajouter un appel à fetch
        // => permet d'envoyer un requête AJAX sans changer de page
        // avant d'envoyer la requête ajax
        // on va récuperer les infos remplies dans le formulaire
        console.log(this);
        // aspire les infos du formulaire
        var formData = new FormData(this);  // Programmation Orientée Objet
        // on va envoyer ces infos avec le fetch
        fetch('api-json.php', {
            method: 'POST',
            body: formData
        })
        .then(function(reponseServeur){
            // je transforme la réponse du serveur en objet JS
            return reponseServeur.json();
        })
        .then((objetJS) => {
            // en utilisant une fonction fléchée
            // => avantage: je garde le this d'avant
            // cool: je peux manipuler un objet JS
            console.log(objetJS);
            if (objetJS.confirmation)
            {
                // je vais copier la valeur dans la balise div.confirmation
                console.log(this); // balise form     
                // dans ma balise form je vais chercher la balise div.confirmation
                this.querySelector(".confirmation").innerHTML = objetJS.confirmation;
            }
            if (objetJS.tabBlog)
            {
                // la fonction va créer le HTML pour afficher les articles
                creerHtmlBlog(objetJS.tabBlog);
            }
        });
    })
});
*/


    /*
    var listeBoutonModifier = document.querySelectorAll(".listeBlogAdmin button.update");
    listeBoutonModifier.forEach(function(bouton){
        bouton.addEventListener("click", function(event){
            console.log('tu as cliqué');
            console.log(this);  // this donne le bouton sur lequel on a cliqué
            // on va afficher la section.section-update
            var sectionUpdate = document.querySelector(".section-update");
            // on va ajouter la classe .afficher
            sectionUpdate.classList.add("afficher");
            // je vais pré-remplir le formulaire de update 
            // avec les infos de l'article dans le tableau
            // je vais récupérer data-indice
            var indice = this.getAttribute("data-indice");
            // je vais utiliser l'indice pour retrouver l'élément dans le tableau
            var article = tabBlogUpdate[indice];
            // debug
            console.log(article);
            // je vais pré-remplir les champs du formulaire d'update
            // id
            var inputId = document.querySelector('.section-update input[name=id]');
            inputId.value = article.id;
            // titre
            var inputTitre = document.querySelector('.section-update input[name=titre]');
            inputTitre.value = article.titre;
            // contenu
            var inputContenu = document.querySelector('.section-update textarea[name=contenu]');
            inputContenu.value = article.contenu;
            // photo
            var inputPhoto = document.querySelector('.section-update input[name=photo]');
            inputPhoto.value = article.photo;
            // datePublication
            var inputDatePublication = document.querySelector('.section-update input[name=datePublication]');
            inputDatePublication.value = article.datePublication;
            // photo
            var inputCategorie = document.querySelector('.section-update input[name=categorie]');
            inputCategorie.value = article.categorie;
        });
    });
    */

        /*
    // une fois que j'ai créé tous mes articles 
    // alors je peux ajouter un event listener sur les boutons
    var listeBoutonSupprimmer = document.querySelectorAll(".listeBlogAdmin button.delete");
    // sur chaque bouton je rajoute un event listener
    listeBoutonSupprimmer.forEach(function(bouton){
        bouton.addEventListener("click", function(event){
            // debug 
            console.log('tu as cliqué');
            console.log(this);  // this donne le bouton sur lequel on a cliqué
            // il faudrait pour pouvoir lancer la requête ajax
            // que je puisse retrouver id de la ligne à supprimer
            // on a préparé le HTML pour retrouver id dans l'attribut data-id
            var idLigne = this.getAttribute("data-id");
            console.log(idLigne);
            
            // on va envoyer une requête ajax vers api-json.php
            // et on va demander à supprimer cette ligne
            var formData = new FormData();
            // en JS, je remplis les infos nécessaires pour traiter le formulaire
            // https://developer.mozilla.org/fr/docs/Web/API/FormData/append#Syntaxe
            formData.append("idFormulaire", "blog-delete");
            formData.append("nomTable", "blog");
            formData.append("id", idLigne);
            fetch('api-json.php', {
                method: 'POST',
                body: formData
            })
            .then(function(reponseServeur){
                // je transforme la réponse du serveur en objet JS
                return reponseServeur.json();
            })
            .then((objetJS) => {
                // en utilisant une fonction fléchée
                // => avantage: je garde le this d'avant
                // cool: je peux manipuler un objet JS
                console.log(objetJS);
    
                if (objetJS.tabBlog)
                {
                    // la fonction va créer le HTML pour afficher les articles
                    creerHtmlBlog(objetJS.tabBlog);
                }
            });
        })
    })
    */

    /*
var boutonClose = document.querySelector('div.close');
if (boutonClose != null)
{
    boutonClose.addEventListener('click', function(){
        var sectionUpdate = document.querySelector('.section-update');
        sectionUpdate.classList.remove('afficher');
    });    
}
*/



    /*
    fetch('api-json.php', {
        method: 'POST',
        body: formData
    })
    .then(function(reponseServeur){
        // je transforme la réponse du serveur en objet JS
        return reponseServeur.json();
    })
    .then((objetJS) => {
        // en utilisant une fonction fléchée
        // => avantage: je garde le this d'avant
        // cool: je peux manipuler un objet JS
        console.log(objetJS);
        if (objetJS.confirmation)
        {
            // je vais copier la valeur dans la balise div.confirmation
            console.log(this); // balise form     
            // dans ma balise form je vais chercher la balise div.confirmation
            this.querySelector(".confirmation").innerHTML = objetJS.confirmation;
        }
        if (objetJS.tabBlog)
        {
            // la fonction va créer le HTML pour afficher les articles
            creerHtmlBlog(objetJS.tabBlog);
        }
    });
    */
        /*
        fetch('api-json.php', {
            method: 'POST',
            body: formData
        })
        .then(function(reponseServeur){
            // je transforme la réponse du serveur en objet JS
            return reponseServeur.json();
        })
        .then((objetJS) => {
            // en utilisant une fonction fléchée
            // => avantage: je garde le this d'avant
            // cool: je peux manipuler un objet JS
            console.log(objetJS);
            if (objetJS.tabBlog)
            {
                // la fonction va créer le HTML pour afficher les articles
                creerHtmlBlog(objetJS.tabBlog);
            }
        });
        */
    /*
    fetch('api-json.php', {
        method: 'POST',
        body: formData
    })
    .then(function(reponseServeur){
        // je transforme la réponse du serveur en objet JS
        return reponseServeur.json();
    })
    .then((objetJS) => {
        // en utilisant une fonction fléchée
        // => avantage: je garde le this d'avant
        // cool: je peux manipuler un objet JS
        console.log(objetJS);
        if (objetJS.tabBlog)
        {
            // la fonction va créer le HTML pour afficher les articles
            creerHtmlBlog(objetJS.tabBlog);
        }
    });
    */
          
          