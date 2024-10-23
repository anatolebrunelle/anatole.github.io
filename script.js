window.onload = function() {
        function couleur() {
            color="#"
            couleur="ABCDEF123456789"
            color+=couleur[Math.floor(Math.random()*10)]
            color+=couleur[Math.floor(Math.random()*10)]
            color+=couleur[Math.floor(Math.random()*10)]
            color+=couleur[Math.floor(Math.random()*10)]
            color+=couleur[Math.floor(Math.random()*10)]
            color+=couleur[Math.floor(Math.random()*10)]
            return color;
        }
        document.getElementById('anatole').style.color = couleur();
        compteur = 0;
        document.getElementById('increment').onclick = function() {
            compteur+=1;
            document.getElementById('compteur').innerText = compteur;
        };
};

