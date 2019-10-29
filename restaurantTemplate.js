



function siteBuilder(){
	$("body").append(`
			<header>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
			  <a class="navbar-brand" href="#">Restaurant</a>
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>

			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul class="navbar-nav mr-auto">
			      <li class="nav-item ">
			        <a class="nav-link" href="#">Home </a>
			      </li>
			      <li class="nav-item active">
			        <a class="nav-link" href="#">Food </a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#">about</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		</header>

		<main>
			<div class="jumbotron">
				<h1 class="display-3">Welcome to restaurant - Noname</h1>
				
				<p class="lead">Sie mögen exklusive Speisen und Getränke, dann sind sie bei uns richtig. Noname steht für Qualität der Speisen und großartigen Service.</p>
				<img class="img-fluid" src="img/csm_restaurant-img_ffc47488b1.jpg">
				<hr class="my-2">
			
			</div>
			<div class="container">
				

			</div> 
		</main>

		`);
}


function cardBuilder(){

	$(".container").append(`
	<div class="card" style="width: 18rem;">
		<img src="#" class="card-img-top" alt="...">
		<div class="card-body">
			<h5 class="card-title">${myvariable}</h5>
		    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		 </div>
		 <ul class="list-group list-group-flush">
		    <li class="list-group-item">Cras justo odio</li>
		    <li class="list-group-item">Dapibus ac facilisis in</li>
		    <li class="list-group-item">Vestibulum at eros</li>
		</ul>
		<div class="card-body">
		    <a href="#" class="card-link">Card link</a>
		    <a href="#" class="card-link">Another link</a>
		</div>
	</div>
		`);
}
