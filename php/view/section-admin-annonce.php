<section>
    <h3>Admin Annonce (CRUD pour la table annonce)</h3>
</section>

<section class="section-update">
    <div class="close">fermer la popup</div>
    <h3>Admin: Annonce UPDATE</h3>
    <!-- formulaire de création de produit d'annonce -->
    
    <form class="ajax" action="api-json.php" method="POST">
        <label>
            <p>id</p>
            <input type="text"  name="id" required placeholder="entrez id">
        </label>
        <label>
            <p>prix</p>
            <input type="text"  name="prix" required placeholder="entrez le prix">
        </label>
        <label>
            <p>marque</p>
            <input type="text"  name="marque" required placeholder="entrez la marque">
        </label>
        <label>
            <p>nom</p>
            <input type="text"  name="nom" required placeholder="entrez le nom">
        </label>
        <label>
            <p>photo</p>
            <input type="text"  name="photo" required placeholder="choisissez la photo" value="assets/images/photo1.jpg">
        </label>
        <label>
            <p>déscrition</p>
            <textarea name="description" cols="80" rows="10" required placeholder="entrez la description"></textarea>
        </label>
        <label>
            <p>couleur</p>
            <input type="text"  name="couleur" required placeholder="entrez la couleur">
        </label>            
        <label>
            <p>date de publication</p>
            <!--fonction php pour la date: https://www.php.net/manual/fr/function.date.php -->
            <input type="text"  name="datePublication" required placeholder="entrez la date" value="<?php echo date("Y-m-d H:i:s")?>">
        </label>
        <label>
            <p>catégorie</p>
            <input type="text"  name="categorie" required placeholder="choisissez la photo" value="annonce">
        </label>
        <button type="submit">modifier votre produit</button>
        <!-- partie technique du formulaire -->
        <div class="confirmation">
            <!-- ici on verra le message de confirmation -->
        </div>
        <input type="hidden" name="idFormulaire" value="annonce-update">
    </form>    
</section>


<!--
<section>
    <h3>Admin: annonce DELETE</h3>
    <form class="ajax" action="api-json.php" method="POST">
        <input type="text" name="annonce" required placeholder="entrez le nom de la table">
        <input type="number" name="id" required placeholder="entrez id de la ligne">
        <button type="submit">supprimer la ligne</button>
        <div class="confirmation"></div>
        <input type="hidden" name="idFormulaire" value="annonce-delete">
    </form>
</section>
-->

<section>
    <h3>Admin: Annonce CREATE</h3>

    <!-- formulaire de création de produit d'annonce -->
    <form class="ajax" action="api-json.php" method="POST">
        <label>
            <p>prix</p>
            <input type="text"  name="prix" required placeholder="entrez le prix">
        </label>
        <label>
            <p>marque</p>
            <input type="text"  name="marque" required placeholder="entrez la marque">
        </label>
        <label>
            <p>nom</p>
            <input type="text"  name="nom" required placeholder="entrez le nom">
        </label>
        <label>
            <p>photo</p>
            <input type="text"  name="photo" required placeholder="choisissez la photo" value="assets/images/photo1.jpg">
        </label>
        <label>
            <p>description</p>
            <textarea name="description" cols="80" rows="10" required placeholder="entrez la description"></textarea>
        </label>
        <label>
            <p>couleur</p>
            <input type="text"  name="couleur" required placeholder="entrez la couleur">
        </label>            
        <label>
            <p>date publication</p>
            <!--fonction php pour la date: https://www.php.net/manual/fr/function.date.php -->
            <input type="text"  name="datePublication" required placeholder="entrez la date" value="<?php echo date("Y-m-d H:i:s")?>">
        </label>
        <p>catégorie</p>
            <input type="text"  name="categorie" required placeholder="choisissez la photo" value="annonce">
        </label>
        <button type="submit">publier votre produit</button>
        <!-- partie technique du formulaire -->
        <div class="confirmation">
            <!-- ici on verra le message de confirmation -->
        </div>
        <input type="hidden" name="idFormulaire" value="annonce-create">
    </form>    
</section>

<section>
    <h3>LISTE DES PRODUITS</h3>
    <!-- ICI ON CREE LA LSITE DES PRODUITS AVEC JS -->
    <!-- CSR Client Side Rendering (construction du HTML en JS) -->
    <!-- Google référence mal le contenu généré par JS -->
    <div class="listeAnnonce listeAnnonceAdmin">
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
    $categorie = $ligneAsso["categorie"];
    $id    = $ligneAsso["id"];
    // construire le code HTML
    echo
<<<CODEHTML
<article>
<div class="categorie">$nom</div>
<img src="$photo">
<button class="delete" data-id="$id" id="delete-$id">supprimer</button>
<button class="update" data-id="$id" id="update-$id">modifier</button>
</article>
CODEHTML;
}
?>
            </div>
        </section>
  
    
    <!-- ICI ON VA INSERER LA LISTE DES PRODUITS -->
    </div>
</section>