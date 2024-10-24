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
    
    compteur = 0;
    let vitesse = 0.6;

    document.getElementById('increment').onclick = function() {
        compteur += 1;
        document.getElementById('compteur').innerText = compteur;
        
        vitesse -= 0.05;
        if(vitesse<=0){
        vitesse=0.08
        }   
        document.getElementById('boule').style.transition = `left ${vitesse}s ease, top ${vitesse}s ease`;
    };

    function Fdistance(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
    }

    document.addEventListener('mousemove', (event) => {
        const boule = document.getElementById('boule');
        const coords = boule.getBoundingClientRect();
        const bouleX = coords.left + coords.width / 2;
        const bouleY = coords.top + coords.height / 2;
        const sourieX = event.clientX;
        const sourieY = event.clientY;
        const distance = Fdistance(sourieX, sourieY, bouleX, bouleY);
        
        if (distance < 100) {
            const largeur = document.documentElement.clientWidth - boule.offsetWidth;
            const hauteur = document.documentElement.clientHeight - boule.offsetHeight;

            const randomX = Math.floor(Math.random() * largeur);
            const randomY = Math.floor(Math.random() * hauteur);
            boule.style.left = `${randomX}px`;
            boule.style.top = `${randomY}px`;
        }
    });
};
