// maintenant on veut faire changer la couleur de l'écran
// pour ça on écrit une fonction qui fait alterner
// entre deux couleurs

function toggle_body_background() {
    let old_color = document.querySelector("body").style.backgroundColor;
    console.log(old_color);
    let new_color;
    if (old_color == "darkgrey") {
        new_color = "bisque";
    } else {
        new_color = "darkgrey";
    }
    // il me reste à 'installer' cette nouvelle couleur dans le DOM
    document.querySelector("body").style.backgroundColor = new_color;
}

// donc ce que je veux faire au démarrage c'est plutôt ceci
// qui consiste à faire en sorte que toggle_body_background
// soit appelée toutes les secondes
function to_do_on_page_load() {
    // cosmétique, si on veut que ça soit appelée LA PREMiÈRE FOIS
    toggle_body_background();
    // puis ensuite toutes les secondes
    setInterval(toggle_body_background, 1000);
}

// et maintenant je peux brancher cette callback sur l'événement "load" 
// on a vu dans le cours une forme avec window.onload, c'est le même effet
window.addEventListener("load", to_do_on_page_load);
