// maintenant on veut faire changer la couleur de l'écran
// pour ça on écrit une fonction qui fait alterner
// entre deux couleurs

function toggle_body_background() {
    let old_color = document.querySelector("body").style.backgroundColor;
    let new_color;
    if (old_color == "darkgrey") {
        new_color = "bisque";
    } else {
        new_color = "darkgrey";
    }
    // il me reste à 'installer' cette nouvelle couleur dans le DOM
    document.querySelector("body").style.backgroundColor = new_color;
}

// si je fais seulement ceci
// ça n'est pas suffisant 
// car la fonction n'est appelée qu'une seule fois bien sûr
function to_do_on_page_load() {
    toggle_body_background();
}

// et maintenant je peux brancher cette callback sur l'événement "load" 
// on a vu dans le cours une forme avec window.onload, c'est le même effet
window.addEventListener("load", to_do_on_page_load);
