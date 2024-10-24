window.onload = function() {
    boule.style.left = 0px;
    boule.style.top = 0px;
    function couleur() {
        color = "#";
        couleur = "ABCDEF123456789";
        for (let i = 0; i < 6; i++) {
            color += couleur[Math.floor(Math.random() * couleur.length)];
        }
        return color;
    }
    document.getElementById('anatole').style.color = couleur();
    
    let compteur = 0;
    document.getElementById('increment').onclick = function() {
        compteur += 1;
        document.getElementById('compteur').innerText = compteur;
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
