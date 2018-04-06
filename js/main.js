// 1.Création du bouton magique

  var overCenter = document.getElementById('okgoogle')
  overCenter.onclick = function() {
    middle.style.display='block';
    overCenter.style.display='none';
}

middle.style.display='none';

// 2.La fonction Search
var buttonsearch = document.getElementById('buttonsearch');
buttonsearch.onclick = redirect;

var search = document.getElementById('recherche');
var linkGoogle = "http://www.google.com/#q=";
function redirect(){
window.location.replace(linkGoogle+search.value);
}

// 3.pop-Up
window.onload = myPorn
function myPorn(){
    setTimeout(()=>{
	var temp = "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"
	if (confirm(temp))
	{
		document.location.href= "https://www.youtube.com/watch?v=2YXVbyXot9Y"  // Code ou appel de fonction
	}
  }, 10000)
}
