<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
    <meta charset="utf-8">
    <!--bootstrap-->
	<!-- https://getbootstrap.com/docs/3.4/css/#overview -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <!--fontawesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">

	<title>Projet e-commerce</title>
	<link rel="stylesheet" href="assets/css/style.css">
    
</head>
<body>
	
  	<!-- Navbar content -->
    <nav class="navbar-expand-lg navbar-dark bg-dark" id="menu" >
	  <h1 class="navbar-brand">NOS TELEPHONES</h1>
	  <div id="achat"><button type="button" id="panier" data-toggle="modal" data-target="#myModalAjouter"><i id="monIconPanier"class="fas fa-shopping-basket fa-2x"></i></button>
	  <span id="score">0</span></div>
    </nav>
  
  	<div id="containerModal">

	<!-- The Modal -->
	<div class="modal" id="myModalAjouter">
	  <div class="modal-dialog">
	    <div class="modal-content">

	      <!-- Modal Header -->
	      <div class="modal-header text-center text-centerAjouter">
	        <h4 class="modal-title white-text w-100 font-weight-bold py-2 success-lighter-hover"><strong>ACHAT</strong></h4>
	        <button id="btnClose" type="button" class="close white-text" data-dismiss="modal">&times;</button>
	      </div>

		  <!-- Modal body -->
		  <div class="modal-body">

		    <div id="label">
		      <div class="form-group">
		        <ul id="listeProduit">
		      
		        <ul></div>
		    </div>

		    </div>

	  <!-- Modal footer -->
	  <div class="modal-footer">
	  	<button type="button" class="btn btn-danger" id="btnSupprimer" data-toggle="modal" data-target="#myModalSupprimer"><i class="fas fa-trash-alt"></i></button>
	    <button type="button" class="btn btn-outline-success waves-effect" data-dismiss="modal"><strong>Valider</strong></button>
	  </div>

	</div>
	</div>
	</div>
    </div>
    <main>