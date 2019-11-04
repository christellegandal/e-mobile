<?php
// ON RECUPERE LES INFOS DU FORMULAIRE
// ET ENSUITE ON VA LES STOCKER DANS LA TABLE SQL annonce
$prix               = $_REQUEST["prix"] ?? "";
$marque             = $_REQUEST["marque"] ?? "";
$nom                = $_REQUEST["nom"] ?? "";
$photo              = $_REQUEST["photo"] ?? "";
$description        = $_REQUEST["description"] ?? "";
$couleur            = $_REQUEST["couleur"] ?? "";
$datePublication    = $_REQUEST["datePublication"] ?? "";
$categorie          = $_REQUEST["categorie"] ?? "";
// appeler ma fonction pour insérer une ligne dans la table SQL annonce
// ON VA CHARGER LE CODE DES FONCTIONS
require "php/mes-fonctions.php";
// ensuite je peux appeler mes fonctions
insererLigneTable("annonce", [
    "prix"             => $prix,
    "marque"           => $marque,
    "nom"              => $nom,
    "photo"            => $photo,
    "description"      => $description,
    "couleur"          => $couleur,
    "datePublication"  => $datePublication,
    "categorie"        => $categorie,
]);
// message de confirmation pour l'utilisateur
$confirmation = "produit publié ($prix)";
// en plus, on va fournir la liste des produits publiés
$tabAnnonce = lireTable("annonce");
// je rajoute le tableau dans la réponse à envoyer au navigateur
$tabAssoJson["tabAnnonce"] = $tabAnnonce; 