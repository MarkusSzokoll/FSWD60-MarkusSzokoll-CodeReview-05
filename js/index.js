$(document).ready(function() {
	var movies = JSON.parse(jsonMovies);
	
	document.getElementById("sort").addEventListener("click",sort,false)


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
			movieArray.sort();
	    }



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
							${movies[j].name}<br><br>${movies[j].overview}<br>${movies[j].likes}
						</div>
					</div>
				</div>
			</div>`;
		}
		content += `</div>`;
		document.getElementById("content").innerHTML = content;
	}

	

	createContent("name");

})



