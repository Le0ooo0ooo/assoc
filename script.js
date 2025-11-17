// Ajouter des interactions simples

// Par exemple : changer de couleur lors du survol du bouton
const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#455a60';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#5a6e6f';
    });
});
