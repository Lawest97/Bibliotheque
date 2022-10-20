var objJson;

function init(){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		objJson=JSON.parse(this.responseText);
		var auteur="";
		var categorie="";
		var tabAuteur=new Array();
		var tabCat=new Array();
		
		document.getElementById("rechAuteur").innerHTML="";
		document.getElementById("rechCat").innerHTML="";
			for (var i=0; i<objJson.length; i++) {
				for(var j=0;j<objJson[i].authors.length; j++){
					if (objJson[i].authors[j]!=='undefined') {
						tabAuteur.push(objJson[i].authors[j].toUpperCase());
                    }
                }
            }
			for (var i=0; i<objJson.length; i++) {
				for(var j=0;j<objJson[i].categories.length; j++){
					if (objJson[i].categories[j]!=='undefined') {
						tabCat.push(objJson[i].categories[j].toUpperCase());
                    }
                }
            }
			tabAuteur.sort();
			tabCat.sort();
			for(var i=0;i<tabAuteur.length;i++){
				if(auteur!=tabAuteur[i]){
					auteur=tabAuteur[i];
					document.getElementById("rechAuteur").innerHTML+='<option>'+tabAuteur[i]+'</option><br>';
				}
			}
			for(var j=0;j<tabCat.length;j++){
				if(categorie!=tabCat[j]){
					categorie=tabCat[j];
					document.getElementById("rechCat").innerHTML+='<option>'+tabCat[j]+'</option><br>';
				}
			}
		//document.getElementById('card').innerHTML="";
		for(var i=0;i<objJson.length;i++){
			var titre=objJson[i].title;
			var imag=objJson[i].thumbnailUrl;
			var isbn=objJson[i].isbn;
			var pages=objJson[i].pageCount;
			var description=objJson[i].shortDescription;
			var describ=objJson[i].longDescription;
			var html="";
			
			if(imag==undefined){
				imag="https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
				
			}
			html='<div class="col-3" style="width: 18rem;"><img src='+imag+' class="card-img-top" alt="..."><div class="card-body" style="background-color:white"><h5 class="card-title">'+titre+'</h5><p class="card-text">'+isbn+'</p>';
			
			if(objJson[i].publishedDate!==undefined){
				var date=objJson[i].publishedDate.$date;
				html+='<p class="card-text">'+date+'</p>';
			}
			if(pages!=0){
				pages=objJson[i].pageCount;
				html+='<p class="card-text">'+pages+'</p>';
			}
			if(describ!=undefined){
				html+='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showDesc('+i+')">Decription</button>';
			}
			if(description!==undefined){
				html+='<p class="card-text">'+description+'</p></div></div>';
			}
			document.getElementById('card').innerHTML+=html;
		}
		document.getElementById('messagechargement').style.display="none";
	
	}
	}
	xhttp.open("GET", "http://localhost/Livres/books.json");
	xhttp.send();
}

 
function recherche(){
var a=document.getElementById("rechAuteur").value;
		var tabLivres= new Array();
		document.getElementById("rechCat").value="";
		document.getElementById("card").innerHTML="";
		
		for (var i=0; i<objJson.length; i++) {
			for(var j=0; j<objJson[i].authors.length; j++){
				if (a==objJson[i].authors[j].toUpperCase()) {
					tabLivres.push(objJson[i]);
                }
            }
        }
		for(var i=0; i<tabLivres.length; i++) {
			var titre=tabLivres[i].title;
			var imag=tabLivres[i].thumbnailUrl;
			var isbn=tabLivres[i].isbn;
			var pages=tabLivres[i].pageCount;
			var description=tabLivres[i].shortDescription;
			var describ=tabLivres[i].longDescription;
			var html1="";
			
			if(imag==undefined){
				imag="https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
			}
			html1='<div class="col-3" style="width: 18rem;"><img src='+imag+' class="card-img-top" alt="..."><div class="card-body" style="background-color:white"><h5 class="card-title">'+titre+'</h5><p class="card-text">'+isbn+'</p>';
			if(objJson[i].publishedDate!==undefined){
				var date=tabLivres[i].publishedDate;
				html1+='<p class="card-text">'+date+'</p>';
			}
			if(pages!=0){
				pages=tabLivres[i].pageCount;
				html1+='<p class="card-text">'+pages+'</p>';
			}
			if(describ!==undefined){
				html1+='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showDesc('+i+')">Decription</button>';
			}
			if(description!==undefined){
				html1+='<p class="card-text">'+description+'</p></div></div>';
			}
			
			document.getElementById('card').innerHTML+=html1;
		}
}

function rech(){
		var a=document.getElementById("rechCat").value;
		var tabLivres= new Array();
		document.getElementById("rechAuteur").value="";
		document.getElementById("card").innerHTML="";
		for (var i=0; i<objJson.length; i++) {
			
			for(var j=0; j<objJson[i].categories.length; j++){
				
				if (a==objJson[i].categories[j].toUpperCase()) {
					tabLivres.push(objJson[i]);
                }
            }
        }
		
		for(var i=0; i<tabLivres.length; i++) {
			var titre=tabLivres[i].title;
			var imag=tabLivres[i].thumbnailUrl;
			var isbn=tabLivres[i].isbn;
			var pages=tabLivres[i].pageCount;
			var description=tabLivres[i].shortDescription;
			var describ=tabLivres[i].longDescription;
			var html1="";
			
			if(imag==undefined){
				imag="https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
			}
			html1='<div class="col-3" style="width: 18rem;"><img src='+imag+' class="card-img-top" alt="..."><div class="card-body" style="background-color:white"><h5 class="card-title">'+titre+'</h5><p class="card-text">'+isbn+'</p>';
			if(objJson[i].publishedDate!==undefined){
				var date=tabLivres[i].publishedDate;
				html1+='<p class="card-text">'+date+'</p>';
			}
			if(pages!=0){
				pages=tabLivres[i].pageCount;
				html1+='<p class="card-text">'+pages+'</p>';
			}
			if(describ!==undefined){
				html1+='<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="showDesc('+i+')">Decription</button>';
			}
			if(description!==undefined){
				html1+='<p class="card-text">'+description+'</p></div></div>';
			}
			document.getElementById('card').innerHTML+=html1;
		}
}

function showDesc(i){
    document.getElementById('desc').innerText=objJson[i].longDescription;
}


