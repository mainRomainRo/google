// 1.Création du bouton magique

//1.1 fqire disparaitre le <div class="middle">
middle.style.display='none';

//1.2 création du bouton
magicBtn.onclick = function() {
    middle.style.display='block';
    magicBtn.style.display='none';
}

// 2.La fonction Search

//2.1 Création des variable Search & link google
var search = document.getElementById('barreRecherche');
var linkGoogle = "http://www.google.com/#q=";

//2.2 Création de la fonction Redirect
function redirect(){
window.location.replace(linkGoogle+search.value);
}

//2.3 Programmation du buttonSearch 
var buttonsearch = document.getElementById('buttonsearch');
buttonsearch.onclick = redirect;

// 3.pop-Up

//3.0 au lancement de la fenetre, lancement de la fonction "myPorn"
window.onload = myPorn

//3.1 Création de la variable "message"
var message = "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"

//3.2 La fonction myPorn
function myPorn(){
    setTimeout(()=>{
      if (confirm(message)){
		  document.location.href= "https://www.youtube.com/watch?v=2YXVbyXot9Y"
	     }
    }, 10000)
}
