<?php
// ON RECUPERE LES INFOS DU FORMULAIRE
// ET ENSUITE ON VA LES STOCKER DANS LA TABLE SQL annonce
$id              = $_REQUEST["id"] ?? "";
$annonce        = $_REQUEST["annonce"] ?? "";
// appeler ma fonction pour insérer une ligne dans la table SQL annonce
// ON VA CHARGER LE CODE DES FONCTIONS
require "php/mes-fonctions.php";
// ensuite je peux appeler mes fonctions
supprimerLigne($annonce, $id);
// message de confirmation pour l'utilisateur
$confirmation = "produit supprimé ($id)";
// en plus, on va fournir la liste des produits publiés
$tabAnnonce = lireTable("annonce");
// je rajoute le tableau dans la réponse à envoyer au navigateur
$tabAssoJson["tabAnnonce"] = $tabAnnonce; 