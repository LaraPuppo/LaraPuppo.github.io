const toggleButton = document.getElementById('toggleButton');

// Verifica la URL actual
if (
    window.location.pathname.includes('80s.html') ||
    window.location.pathname.includes('90s.html') ||
    window.location.pathname.includes('00s.html') ||
    window.location.pathname.includes('10s.html') ||
    window.location.pathname.includes('20s.html')
) {
    // Si estamos en cualquiera de esas páginas, redirige a index.html
    toggleButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
} else {
    // Si estamos en index.html, redirige a 80s.html
    toggleButton.addEventListener('click', function () {
        window.location.href = '80s.html';
    });
}

// Selecciona todos los elementos con la clase 'decade-color'
const decadeColors = document.querySelectorAll('.decade-color');

// Añade un evento de clic a cada uno
decadeColors.forEach(decade => {
    decade.addEventListener('click', function () {
        // Obtiene la URL de la propiedad data-url
        const url = this.getAttribute('data-url');
        // Redirige a la URL correspondiente
        window.location.href = url;
    });
});

function openModal(locationId) {
    // Muestra el modal
    document.getElementById('myModal').style.display = 'block';
    
    // Variables para el contenido del modal
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImpact = document.getElementById('modal-impact');
    const modalVideo = document.querySelector('.modal-video iframe');

    let videoId = ''; // Inicializar videoId

    // Actualiza el contenido del modal y el video según la ubicación
    if (locationId === 'Argentina') {
        modalTitle.innerText = 'Argentina - Década de los 80s';
        modalDescription.innerText = 'Información sobre Argentina y las canciones más populares de los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en Argentina.';
        videoId = 'VIDEO_ID_ARGENTINA'; // Reemplaza con el ID del video de YouTube para Argentina
    } else if (locationId === 'UnitedStates1') {
        modalTitle.innerText = 'Estados Unidos (Ubicación 1) - Década de los 80s';
        modalDescription.innerText = 'Información sobre la primera ubicación en Estados Unidos y su influencia musical en los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en EE. UU.';
        videoId = 'VIDEO_ID_US1'; // Reemplaza con el ID del video de YouTube para Estados Unidos 1
    } else if (locationId === 'UnitedStates2') {
        modalTitle.innerText = 'Estados Unidos (Ubicación 2) - Década de los 80s';
        modalDescription.innerText = 'Información sobre la segunda ubicación en Estados Unidos y su influencia musical en los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en EE. UU.';
        videoId = 'VIDEO_ID_US2'; // Reemplaza con el ID del video de YouTube para Estados Unidos 2
    } else if (locationId === 'ReinoUnido1') {
        modalTitle.innerText = 'Reino Unido (Ubicación 1) - Década de los 80s';
        modalDescription.innerText = 'Información sobre la primera ubicación en Reino Unido y su influencia musical en los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en el Reino Unido.';
        videoId = 'https://youtu.be/W8r-tXRLazs?si=wmXqIEz2u1suLVkR'; // Reemplaza con el ID del video de YouTube para Reino Unido 1
    } else if (locationId === 'ReinoUnido2') {
        modalTitle.innerText = 'Reino Unido (Ubicación 2) - Década de los 80s';
        modalDescription.innerText = 'Información sobre la segunda ubicación en Reino Unido y su influencia musical en los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en el Reino Unido.';
        videoId = 'VIDEO_ID_UK2'; // Reemplaza con el ID del video de YouTube para Reino Unido 2
    } else if (locationId === 'Inglaterra') {
        modalTitle.innerText = 'Inglaterra - Década de los 80s';
        modalDescription.innerText = 'Información sobre Inglaterra y su influencia musical en los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en Inglaterra.';
        videoId = 'VIDEO_ID_ENGLAND'; // Reemplaza con el ID del video de YouTube para Inglaterra
    } else if (locationId === 'Noruega') {
        modalTitle.innerText = 'Noruega - Década de los 80s';
        modalDescription.innerText = 'Información sobre Noruega y su influencia musical en los 80s.';
        modalImpact.innerText = 'Impacto de la música de los 80s en Noruega.';
        videoId = 'VIDEO_ID_NORWAY'; // Reemplaza con el ID del video de YouTube para Noruega
    }

    // Establece el enlace del video de YouTube en el iframe
    modalVideo.src = `https://www.youtube.com/embed/${videoId}`;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    document.querySelector('.modal-video iframe').src = ''; // Limpia el iframe cuando se cierra el modal
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}




// document.getElementById("toggleButton").addEventListener("click", function () {
//     const images = document.querySelectorAll(".decade-image");
//     const icon = document.getElementById("toggleIcon");
//     const navbarElements = document.querySelector(".navbar-elements");
//     const mapText = document.getElementById("map-text");
//     const allPaths = document.querySelectorAll(".allPaths");
//     const reproductorContainer = document.getElementById("reproductor-container");
//     const locationIcon = document.getElementById("location-icon");

//     // Alterna entre blanco y negro y color para las imágenes de las décadas
//     images.forEach(function (image) {
//         image.classList.toggle("color-active");
//     });

//     // Alterna el color de los países en el mapa
//     allPaths.forEach(function (path) {
//         path.classList.toggle("color-active");
//     });

//     const isColorActive = images[0].classList.contains("color-active");

//     if (isColorActive) {
//         icon.src = "assets/pause.svg";
//         navbarElements.classList.add("active");
//         mapText.classList.add("hidden");
//         reproductorContainer.style.display = "block";

//         // Mostrar el icono de ubicación en el estado de color
//         locationIcon.style.display = "block";
//     } else {
//         icon.src = "assets/play.svg";
//         navbarElements.classList.remove("active");
//         mapText.classList.remove("hidden");
//         reproductorContainer.style.display = "none";

//         // Ocultar el icono de ubicación cuando no está en color
//         locationIcon.style.display = "none";
//         marker.style.display = "none"; // Ocultar el marcador en estado blanco y negro
//     }
// });

// const marker = document.getElementById('marker');
// const decades = document.querySelectorAll('.decade-image');

// // Establecer posición inicial del marcador
// marker.style.left = "calc(50% - 100px)"; // Ajusta la posición inicial
// marker.style.display = "none"; // Asegúrate de que esté oculto inicialmente
// const locationIcon = document.getElementById("location-icon");
// locationIcon.style.display = "none"; // Asegúrate de que esté oculto inicialmente

// // Cambia la posición del marcador y el icono de ubicación al hacer clic en una década, solo si está en color
// decades.forEach((decade, index) => {
//     decade.addEventListener('click', (event) => {
//         const isColorActive = document.querySelectorAll(".decade-image")[0].classList.contains("color-active");
//         if (isColorActive) {
//             const decadeRect = event.target.getBoundingClientRect();
//             const decadeWidth = decadeRect.width;
//             const decadeLeft = decadeRect.left + window.scrollX;

//             // Mueve el marcador al centro de la década seleccionada
//             const markerPosition = decadeLeft + (decadeWidth / 2) - (marker.offsetWidth / 2);
//             marker.style.left = `${markerPosition}px`;
//             marker.style.display = "block"; // Mostrar el marcador cuando se selecciona una década

//             // Cambiar la posición del icono de ubicación según la década
//             locationIcon.style.display = "block"; // Mostrar el icono de ubicación
//             locationIcon.style.left = `${decadeLeft + (decadeWidth / 2) - 25}px`; // Ajustar la posición del icono
//         }
//     });
// });

// const reproductorContainer = document.getElementById("reproductor-container");
// reproductorContainer.style.display = "none"; // Asegúrate de que esté oculto inicialmente


