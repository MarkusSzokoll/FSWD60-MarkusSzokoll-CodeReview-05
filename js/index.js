$(document).ready(function() {
	var movies = JSON.parse(jsonMovies);
	var sort1 = false;
	var sort2 = false;
	var sortType = false;
	
	document.getElementById("sort1").addEventListener("click", function(){sort("name");},false);
	document.getElementById("sort2").addEventListener("click", function(){sort("likes");},false);
	document.getElementById("sortType").addEventListener("click", function(){sort("type");},false);


	function createContent(what){

		var movieArray = new Array();
		for (i = 0; i < movies.length; i++){
			var val2push = new Array();
			val2push[0]	= i;
			val2push[1]	= movies[i].name;
			val2push[2]	= movies[i].likes;
		   	movieArray.push(val2push);
    	}
	   
	    if(what=="likes"){
	   		movieArray.sort(function(a,b) {
   				return a[2]-b[2]
			});
		}
		else if(what=="name"){
			movieArray.sort(function(a,b) {
				if(a[1].charCodeAt(0)==b[1].charCodeAt(0)){
					return a[1].charCodeAt(1)-b[1].charCodeAt(1)
				}
				else{
   					return a[1].charCodeAt(0)-b[1].charCodeAt(0)
   				}
			});
	    }
	    if(sortType){movieArray.reverse()}



		var content = "";
		content += `<div class="row">`;
		for(i=0;i<movies.length;i++){
			j = movieArray[i][0];
			content += `<div class="col-lg6 col-md-6 col-sm-12 col-xs-12 moviebox">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<img height="350px" src="img/${movies[j].image}"></img>
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 shortInfo">
							<h3>${movies[j].name}</h3><br><br>${movies[j].overview}<br><button id="id${j}">LIKE</button><span id="span${j}">${movies[j].likes}</span>
						</div>
					</div>
				</div>
			</div>`;
		}
		content += `</div>`;
		document.getElementById("content").innerHTML = content;

		for(i=0;i<movies.length;i++){
			var yyy = "id"+i.toString();
			document.getElementById(yyy).addEventListener("click", function(){lb(i);},false);
		
		}

		
	}

	function lb(real){
		movies[real].likes += 1;
		sort("justdo");
		var yyy = "span"+real.toString();
		document.getElementById(yyy).innerHTML += 1;
	}
	

	function sort(what){
		if(what=="type"){
			sortType = !sortType;
			if(!sortType){
				document.getElementById("sortType").style.background = "white";
				document.getElementById("sortType").innerHTML = "ASCENDING";
			}
			else{
				document.getElementById("sortType").style.background = "yellow";
				document.getElementById("sortType").innerHTML = "DESCENDING";
			}
			if(sort1){
				createContent("name");
			}
			else if(sort2){
				createContent("likes");
			}
		}
		else if(what=="justdo"){
			if(sort1){
				createContent("name");
			}
			else if(sort2){
				createContent("likes");
			}
		}
		else if(what=="name"){
			if(!sort1){
				sort1=true;
				sort2=false;
				document.getElementById("sort1").style.background = "yellow";
				document.getElementById("sort2").style.background = "white";
				createContent("name");
			}
		}
		else if(what=="likes"){
			if(!sort2){
				sort1=false;
				sort2=true;
				document.getElementById("sort1").style.background = "white";
				document.getElementById("sort2").style.background = "yellow";
				createContent("likes");
			}
		}
		}
	
	sort("name");



})



