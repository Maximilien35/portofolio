// Les animations JavaScript sont généralement utilisées pour :
// 1. Ajouter des effets "on scroll" (avec une librairie comme AOS)
// 2. Faire apparaître les éléments après un certain délai (effet 'typing' ou 'fade-in')
// 3. Gérer les interactions utilisateur (comme un menu burger, non visible ici, ou un bouton de thème Dark/Light)

document.addEventListener('DOMContentLoaded', () => {
    // Exemple d'animation simple : un léger fondu enchaîné pour la section hero

    const heroContent = document.querySelector('.content-block');
    const profileCircle = document.querySelector('.profile-circle');

    // On s'assure que les éléments sont cachés au début via CSS ou on les cache ici
    // heroContent.style.opacity = 0;
    // profileCircle.style.opacity = 0;

    // Animation au chargement de la page (si on veut un effet d'apparition)
    // On pourrait utiliser l'API Web Animations ou des transitions CSS + classes JS
    
    setTimeout(() => {
        // Ajoute une classe pour déclencher la transition CSS d'apparition
        // heroContent.classList.add('is-visible'); 
    }, 300);

    setTimeout(() => {
        // profileCircle.classList.add('is-visible');
    }, 600);


    // Exemple : Ajouter un écouteur d'événement au survol du bouton "Voir mes projets" 
    // Bien que le CSS pur suffise pour le :hover, le JS permet des animations plus complexes.
    const primaryButton = document.querySelector('.custom-btn-primary');
    primaryButton.addEventListener('click', () => {
        console.log('Bouton "Voir mes projets" cliqué !');
        // Ajouter ici une logique de navigation ou un effet visuel complexe
    });
});