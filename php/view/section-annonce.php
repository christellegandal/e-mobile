 <section>
            <h3>Annonce</h3>
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
$tabProduit = lireTable("annonce", "categorie", "annonce");
// SSR Server Side Rendering
// On crée le code HTML avec PHP
// => le navbigateur reçoit directement le code HTML
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
    $datePublication = $ligneAsso["nom"];
    $catégorie = $ligneAsso["catégorie"];
    $id    = $ligneAsso["id"];
    // construire le code HTML
    echo
<<<CODEHTML
    <produit>
        <!-- on ne passe pas par le formulaire pour produire le lien -->
        <!-- on crée directement le lien dans une balise a -->
        <h3><a href="template-produit.php?id=$id">$prix</a></h3>
<!-- 
        <form action="template-produit.php" method="GET">
            <input type="hidden" name="id" value="$id">
            <button type="submit">$prix</button>
        </form>
-->
        <p>$marque</p>
        <p>$nom</p>
        <img src="$photo" alt="$photo">
        <p>$description</p>
        <p>$couleur</p>

    </produit>
CODEHTML;
}
?>
            </div>
        </section>
