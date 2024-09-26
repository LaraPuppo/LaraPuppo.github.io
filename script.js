document.getElementById("toggleButton").addEventListener("click", function () {
    const images = document.querySelectorAll(".decade-image");
    const icon = document.getElementById("toggleIcon");
    const navbarElements = document.querySelector(".navbar-elements");
    const mapText = document.getElementById("map-text");
    const allPaths = document.querySelectorAll(".allPaths");
    const reproductorContainer = document.getElementById("reproductor-container");
    const locationIcon = document.getElementById("location-icon");

    // Alterna entre blanco y negro y color para las imágenes de las décadas
    images.forEach(function (image) {
        image.classList.toggle("color-active");
    });

    // Alterna el color de los países en el mapa
    allPaths.forEach(function (path) {
        path.classList.toggle("color-active");
    });

    const isColorActive = images[0].classList.contains("color-active");

    if (isColorActive) {
        icon.src = "assets/pause.svg";
        navbarElements.classList.add("active");
        mapText.classList.add("hidden");
        reproductorContainer.style.display = "block";

        // Mostrar el icono de ubicación en el estado de color
        locationIcon.style.display = "block";
    } else {
        icon.src = "assets/play.svg";
        navbarElements.classList.remove("active");
        mapText.classList.remove("hidden");
        reproductorContainer.style.display = "none";

        // Ocultar el icono de ubicación cuando no está en color
        locationIcon.style.display = "none";
        marker.style.display = "none"; // Ocultar el marcador en estado blanco y negro
    }
});

const marker = document.getElementById('marker');
const decades = document.querySelectorAll('.decade-image');

// Establecer posición inicial del marcador
marker.style.left = "calc(50% - 100px)"; // Ajusta la posición inicial
marker.style.display = "none"; // Asegúrate de que esté oculto inicialmente
const locationIcon = document.getElementById("location-icon");
locationIcon.style.display = "none"; // Asegúrate de que esté oculto inicialmente

// Cambia la posición del marcador y el icono de ubicación al hacer clic en una década, solo si está en color
decades.forEach((decade, index) => {
    decade.addEventListener('click', (event) => {
        const isColorActive = document.querySelectorAll(".decade-image")[0].classList.contains("color-active");
        if (isColorActive) {
            const decadeRect = event.target.getBoundingClientRect();
            const decadeWidth = decadeRect.width;
            const decadeLeft = decadeRect.left + window.scrollX;

            // Mueve el marcador al centro de la década seleccionada
            const markerPosition = decadeLeft + (decadeWidth / 2) - (marker.offsetWidth / 2);
            marker.style.left = `${markerPosition}px`;
            marker.style.display = "block"; // Mostrar el marcador cuando se selecciona una década

            // Cambiar la posición del icono de ubicación según la década
            locationIcon.style.display = "block"; // Mostrar el icono de ubicación
            locationIcon.style.left = `${decadeLeft + (decadeWidth / 2) - 25}px`; // Ajustar la posición del icono
        }
    });
});

const reproductorContainer = document.getElementById("reproductor-container");
reproductorContainer.style.display = "none"; // Asegúrate de que esté oculto inicialmente


