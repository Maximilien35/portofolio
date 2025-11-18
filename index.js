// Les animations JavaScript sont généralement utilisées pour :
// 1. Ajouter des effets "on scroll" (avec une librairie comme AOS)
// 2. Faire apparaître les éléments après un certain délai (effet 'typing' ou 'fade-in')
// 3. Gérer les interactions utilisateur (comme un menu burger, non visible ici, ou un bouton de thème Dark/Light)
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const formData = new FormData(form);
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset(); // Réinitialise le formulaire
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
        } else {
            alert('Une erreur est survenue. Veuillez réessayer plus tard.');
        }
    }).catch(error => {
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    });

});
