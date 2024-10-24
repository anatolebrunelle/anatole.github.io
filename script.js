window.onload = function() {
    function couleur() {
        let color = "#";
        const couleur = "ABCDEF123456789";
        for (let i = 0; i < 6; i++) {
            color += couleur[Math.floor(Math.random() * couleur.length)];
        }
        return color;
    }
    document.getElementById('anatole').style.color = couleur();
    stockcompteur = parseInt(localStorage.getItem('stockcompteur')) || 0;
    document.getElementById('compteur').innerText = stockcompteur; 

    vitesse = parseFloat(localStorage.getItem('vitesse')) || (0.7);
    document.getElementById('boule').style.transition = `left ${vitesse}s ease, top ${vitesse}s ease`;

    console.log('vitesse', vitesse)
    document.getElementById('plus').onclick = function() {
        if (stockcompteur < 20) {
            stockcompteur += 1;
            document.getElementById('compteur').innerText = stockcompteur;

            vitesse -= 0.03;
            if (vitesse < 0.1) {
                vitesse = 0.1;
            }
            document.getElementById('boule').style.transition = `left ${vitesse}s ease, top ${vitesse}s ease`;

            localStorage.setItem('stockcompteur', stockcompteur);
            localStorage.setItem('vitesse', vitesse);
        }
    };

    document.getElementById('moins').onclick = function() {
        if (stockcompteur > 0) {
            stockcompteur -= 1;
            document.getElementById('compteur').innerText = stockcompteur;

            vitesse += 0.03;
            document.getElementById('boule').style.transition = `left ${vitesse}s ease, top ${vitesse}s ease`;

            localStorage.setItem('stockcompteur', stockcompteur);
            localStorage.setItem('vitesse', vitesse);
        }
    };

    function Fdistance(x1, y1, x2, y2) {
        dx = x2 - x1;
        dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    document.addEventListener('mousemove', (event) => {
        boule = document.getElementById('boule');
        coords = boule.getBoundingClientRect();
        bouleX = coords.left + coords.width / 2;
        bouleY = coords.top + coords.height / 2;
        sourieX = event.clientX;
        sourieY = event.clientY;
        distance = Fdistance(sourieX, sourieY, bouleX, bouleY);

        if (distance < 100) {
            largeur = document.documentElement.clientWidth - boule.offsetWidth;
            hauteur = document.documentElement.clientHeight - boule.offsetHeight;

            randomX = Math.floor(Math.random() * largeur);
            randomY = Math.floor(Math.random() * hauteur);
            boule.style.left = `${randomX}px`;
            boule.style.top = `${randomY}px`;
        }
    });
};
