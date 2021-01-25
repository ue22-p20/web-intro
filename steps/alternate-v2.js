// premier pas
// on définit une fonction qui change la couleur de fond
function set_body_background(color) {
    document.querySelector("body").style.backgroundColor = color;
}

// pour être sûr que ça marche, il faut s'arranger 
// pour que la fonction soit appelée APRÈS le chargement de la page

// mais pour ça j'ai besoin d'une fonction SANS argument
function to_do_on_page_load() {
    set_body_background("darkgrey");    
}

// et maintenant je peux brancher cette callback sur l'événement "load" 
// on a vu dans le cours une forme avec window.onload, c'est le même effet
window.addEventListener("load", to_do_on_page_load);
