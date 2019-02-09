
var movies = JSON.parse(jsonMovies);
var content = "";
content += `<div class="row">`;
for(i=0;i<movies.length;i++){
	content += `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">movie `+i+`</div>`;
}
content += `</div>`;
document.getElementById("content").innerHTML = content;