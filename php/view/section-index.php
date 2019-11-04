<!-- <section>

    <div class="container">
  	    <div class="" id="promo">
            <h2>NOS PROMOS</h2>
  	    </div>
    </div>
</section>       -->

<section>
            <h3 id="accueil">LISTE DE MES PRODUITS</h3>
            <div class="listeAnnonce"><!--container pour Flexbox -->
<?php
// ON VA AFFICHER LA LISTE DES PRODUITS
// etape1: il faut charger mes fonctions
require_once "php/mes-fonctions.php";
// etape2: on appelle la fonction
// je ne veux que les lignes dans la catégorie annonce
// parametre1: "annonce" est le nom de la table SQL
// parametre2: "categorie" est le nom de la colonne SQL dans la table annonce
// parametre3: "annonce" est la valeur de sélection de la colonne "catégorie"
$tabProduit = lireTable("annonce");
// SSR Server Side Rendering
// On crée le code HTML avec PHP
// => le navigateur reçoit directement le code HTML
// => google référence mieux ce contenu
// on fait une boucle pour parcourir la liste des produits
foreach($tabProduit as $ligneAsso)
{
    $prix = $ligneAsso["prix"];
    $marque = $ligneAsso["marque"];
    $nom = $ligneAsso["nom"];
    $photo = $ligneAsso["photo"];
    $description = $ligneAsso["description"];
    $couleur = $ligneAsso["couleur"];
    $datePublication = $ligneAsso["datePublication"];
    $categorie = $ligneAsso["categorie"];
    $id    = $ligneAsso["id"];

    // construire le code HTML
    echo
<<<CODEHTML
<div class="card">
<div class="card-header"><p><strong>$prix €</strong></p>
  </div>
<div class="card-body">
  <h4 class="card-title">$marque</h4> 
  <h5 class="card-title"><b> $nom</b></h5>
   <img src="$photo" class="card-img-top" alt=""> 
  <h5 class="card-title"><i>$couleur</i></h5>
  <p id="description"> $description</p>
</div>
<div class="card-footer">
  <button type="button" class="btn btn-danger" id="btnAcheter" data-toggle="modal"><i id="iconPanier"class="fas fa-cart-plus "><span> | ACHETER</span></i></button>
</div>
</div>
CODEHTML;
}
?>
            </div>
        </section>
              