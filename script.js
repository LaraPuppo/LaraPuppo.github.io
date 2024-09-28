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


// function openModal(locationId) {
//     // Muestra el modal
//     document.getElementById('myModal').style.display = 'block';

//     // Variables para el contenido del modal
//     const modalTitle = document.getElementById('modal-title');
//     const modalDescription = document.getElementById('modal-description');
//     const modalImpact = document.getElementById('modal-impact');
//     const modalVideo = document.querySelector('.modal-video iframe');

//     let videoId = ''; // Inicializar videoId

//     // Actualiza el contenido del modal y el video según la ubicación
//     if (locationId === 'Argentina') {
//         modalTitle.innerText = 'ROCK';
//         modalDescription.innerHTML = `
//         <p>"En la Ciudad de la Furia"</p>
//         <p>Soda Stereo (1988)</p>
//         <p>Argentina</p>
//         <p>El videoclip utiliza efectos visuales digitales y técnicas de edición para crear una atmósfera única. Aunque el uso de CGI no es avanzado en comparación con estándares modernos, fue innovador para su época.</p>
//     `;
//         modalImpact.innerHTML = `
//         <p>El videoclip es conocido por su estilo visual distintivo y su capacidad para capturar la esencia de la canción. Ayudó a definir el estilo visual de Soda Stereo en los años 90.</p>
//         <p>Aunque el uso de CGI en América del Sur durante los años 90 no fue tan prominente como en otras regiones, estos ejemplos muestran cómo se utilizaron técnicas visuales avanzadas para realzar los videoclips en esa época.</p>
//     `;
//         videoId = 'https://youtu.be/AVEDgT_lG60?si=hyAzgRa4WGAyYrbc'; // Reemplaza con el ID del video de YouTube para Argentina
//     } else if (locationId === 'UnitedStates1') {
//         modalTitle.innerText = 'ELÉCTRONICA';
//         modalDescription.innerHTML = `
//         <p>"Rockit"</p>
//         <p>Herbie Hancock (1983)</p>
//         <p>Estados Unidos</p>
//         <p>Aunque "Rockit" no usa CGI en el sentido de gráficos generados por computadora, es un video altamente innovador por el uso de animatrónica y efectos visuales experimentales, lo que marcó un punto de inflexión en la forma en que se producían videos musicales.</p>
//     `;
//         modalImpact.innerHTML = `
//         <p>"Rockit" fue revolucionario porque fue uno de los primeros videos en popularizar la estética futurista y el uso de robótica en videos musicales. Ganó cinco premios en los MTV Video Music Awards en 1984, incluyendo "Mejor Video Conceptual".</p>
//         <p>En lugar de mostrar a los músicos, el video se centra en estos dispositivos robóticos y máquinas que "bailan" y se mueven de manera surrealista, un concepto muy inusual para la época. Es una metáfora visual de la fusión entre humanos y tecnología en la música y la cultura.</p>
//     `;
//         videoId = 'https://youtu.be/GHhD4PD75zY?si=9Frm4iNMBp4OuV1E'; // Reemplaza con el ID del video de YouTube para Estados Unidos 1
//     } else if (locationId === 'UnitedStates2') {
//         modalTitle.innerText = 'ELÉCTRONICA';
//         modalDescription.innerHTML = `
//         <p>"Money for nothing"</p>
//         <p>Dire Straits (1985)</p>
//         <p>Estados Unidos</p>
//         <p>Uno de los primeros videos musicales en utilizar animación por computadora (CGI) de manera extensiva. La animación 3D era una tecnología emergente en los años 80, y el video hizo un uso notable de gráficos generados por computadora para crear personajes y efectos visuales</p>
//     `;
//         modalImpact.innerHTML = `
//         <p>"Rockit" fue revolucionario porque fue uno de los primeros videos en popularizar la estética futurista y el uso de robótica en videos musicales. Ganó cinco premios en los MTV Video Music Awards en 1984, incluyendo "Mejor Video Conceptual".</p>
//         <p>Este videoclip es un ejemplo destacado de la vanguardia tecnológica en los años 80 y sigue siendo uno de los videos más emblemáticos de la era.</p>
//     `;
//         videoId = 'https://www.youtube.com/watch?v=wTP2RUD_cL0'; // Reemplaza con el ID del video de YouTube para Estados Unidos 2
//     } else if (locationId === 'ReinoUnido1') {
//         modalTitle.innerText = 'POP';
//         modalDescription.innerHTML = `
//         <p>"Video Killed the Radio Star" </p>
//         <p>The Buggles (1980)</p>
//         <p>Reino Unido</p>
//         <p>Aunque no utilizó CGI en el sentido moderno, el videoclip es famoso por sus efectos visuales y técnicas de edición pioneras para la época. Fue uno de los primeros videos musicales en utilizar técnicas de efectos visuales y animación para crear una experiencia visual distintiva.</p>
//     `;
//         modalImpact.innerHTML = `
//         <p>"Video Killed the Radio Star" es famoso por ser el primer video musical que se transmitió en MTV cuando el canal fue lanzado en 1981. Esto lo convirtió en un hito en la historia de los videos musicales y la televisión.</p>
//         <p> El video es considerado un ejemplo pionero de cómo los videos musicales podían ser utilizados para contar una historia visualmente atractiva y cómo la tecnología podía ser utilizada para crear efectos impactantes en el cine y la televisión.</p>
//     `;
//         videoId = 'https://youtu.be/W8r-tXRLazs?si=wmXqIEz2u1suLVkR'; // Reemplaza con el ID del video de YouTube para Reino Unido 1
//     } else if (locationId === 'ReinoUnido2') {
//         modalTitle.innerText = 'ROCK';
//         modalDescription.innerHTML = `
//         <p>"Hold On Tight"</p>
//         <p>Electric Light Orchestra (1981) </p>
//         <p>Reino Unido</p>
//         <p>Aunque el video no emplea CGI en el sentido moderno, utiliza elementos visuales innovadores para evocar una narrativa futurista y surrealista. El videoclip presenta efectos visuales y técnicas de filmación que crean una atmósfera única y dinámica, representando un avance en la creatividad visual de la época.</p>
//     `;
//         modalImpact.innerHTML = `
//         <p>"Hold On Tight" es notable por su estilo visual distintivo y su capacidad para capturar la esencia del rock en una era de innovación tecnológica. </p>
//         <p>El video contribuyó a la evolución del formato, explorando nuevas formas de integrar la música con experiencias visuales que resonaron con el público y demostraron el potencial del video musical como medio artístico.</p>
//     `;
//         videoId = 'https://youtu.be/UkekqVPIc2M?si=ADso4dsEVQzTPk2I'; // Reemplaza con el ID del video de YouTube para Reino Unido 2
//     } else if (locationId === 'Inglaterra') {
//          modalTitle.innerText = 'POP';
//         modalDescription.innerHTML = `
//         <p>"The Wild Boys" </p>
//         <p>Duran (1984)</p>
//         <p>Inglaterra</p>
//         <p> Aunque no es puramente CGI en todo el video, "The Wild Boys" incorporó efectos digitales avanzados para la época, incluyendo animaciones generadas por computadora. Esto se utilizó principalmente para efectos de fondo y escenas futuristas que complementaban el tema distópico del video.</p>
//     `;
//         modalImpact.innerHTML = `
//         <p>Aunque Duran Duran es una banda británica, el video tuvo un fuerte impacto en la escena estadounidense debido a su constante rotación en MTV, donde fue muy popular, impulsando el uso de CGI en videoclips en Estados Unidos y el resto del mundo.</p>
//         <p>El video mostraba un mundo posapocalíptico con escenarios mecanizados y animaciones que sugerían una civilización futurista, utilizando efectos especiales que combinaron CGI con efectos prácticos.</p>
//     `;
//         videoId = 'https://youtu.be/M43wsiNBwmo?si=izYN-2mxxB80l-3v'; // Reemplaza con el ID del video de YouTube para Inglaterra
//     } else if (locationId === 'Noruega') {
//         modalTitle.innerText = 'POP';
//         modalDescription.innerHTML = `
//         <p>"Take on me"</p>
//         <p>a-ha (1985)</p>
//         <p>Noruega</p>
//         <p>"Take On Me" es famoso por su combinación única de live-action y animación en rotoscopia. Aunque no usó CGI en el sentido moderno, el videoclip es notable por su uso de rotoscopia para crear una estética de cómic que se mezcla con escenas en vivo.
//         </p>
//     `;
//         modalImpact.innerHTML = `
//         <p>La técnica de rotoscopia implica dibujar sobre fotogramas de acción en vivo para crear un efecto visual estilizado. 
//         </p>
//         <p>
// En el video, esto se utiliza para transformar las escenas en un estilo de cómic en blanco y negro, creando una experiencia visual única. Las escenas de acción en vivo se combinan con fondos dibujados a mano, dando una sensación de transición entre un mundo real y un mundo de cómic.
//         </p>
//     `;
//         videoId = 'https://youtu.be/djV11Xbc914?si=_A4Tu8kdSgLlN8ph'; // Reemplaza con el ID del video de YouTube para Noruega
//     }

//     // Establece el enlace del video de YouTube en el iframe 
//     modalVideo.src = 'https://www.youtube.com/embed/${videoId}';
// }

// function closeModal() {
//     document.getElementById('myModal').style.display = 'none';
//     document.querySelector('.modal-video iframe').src = ''; // Limpia el iframe cuando se cierra el modal
// }

// // Cierra el modal si se hace clic fuera de él
// window.onclick = function (event) {
//     const modal = document.getElementById('myModal');
//     if (event.target === modal) {
//         closeModal();
//     }
// }



// function openModal(locationId) {
//     // Muestra el modal
//     document.getElementById('myModal').style.display = 'block';
    
//     // Variables para el contenido del modal
//     const modalTitle = document.getElementById('modal-title');
//     const modalDescription = document.getElementById('modal-description');
//     const modalImpact = document.getElementById('modal-impact');
//     const modalVideo = document.querySelector('.modal-video iframe');

//     let videoId = ''; // Inicializar videoId

//     // Actualiza el contenido del modal y el video según la ubicación
//     if (locationId === 'Argentina') {
//         modalTitle.innerText = 'Argentina - Década de los 80s';
//         modalDescription.innerText = 'Información sobre Argentina y las canciones más populares de los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en Argentina.';
//         videoId = 'VIDEO_ID_ARGENTINA'; // Reemplaza con el ID del video de YouTube para Argentina
//     } else if (locationId === 'UnitedStates1') {
//         modalTitle.innerText = 'Estados Unidos (Ubicación 1) - Década de los 80s';
//         modalDescription.innerText = 'Información sobre la primera ubicación en Estados Unidos y su influencia musical en los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en EE. UU.';
//         videoId = 'VIDEO_ID_US1'; // Reemplaza con el ID del video de YouTube para Estados Unidos 1
//     } else if (locationId === 'UnitedStates2') {
//         modalTitle.innerText = 'Estados Unidos (Ubicación 2) - Década de los 80s';
//         modalDescription.innerText = 'Información sobre la segunda ubicación en Estados Unidos y su influencia musical en los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en EE. UU.';
//         videoId = 'VIDEO_ID_US2'; // Reemplaza con el ID del video de YouTube para Estados Unidos 2
//     } else if (locationId === 'ReinoUnido1') {
//         modalTitle.innerText = 'Reino Unido (Ubicación 1) - Década de los 80s';
//         modalDescription.innerText = 'Información sobre la primera ubicación en Reino Unido y su influencia musical en los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en el Reino Unido.';
//         videoId = 'https://youtu.be/W8r-tXRLazs?si=wmXqIEz2u1suLVkR'; // Reemplaza con el ID del video de YouTube para Reino Unido 1
//     } else if (locationId === 'ReinoUnido2') {
//         modalTitle.innerText = 'Reino Unido (Ubicación 2) - Década de los 80s';
//         modalDescription.innerText = 'Información sobre la segunda ubicación en Reino Unido y su influencia musical en los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en el Reino Unido.';
//         videoId = 'VIDEO_ID_UK2'; // Reemplaza con el ID del video de YouTube para Reino Unido 2
//     } else if (locationId === 'Inglaterra') {
//         modalTitle.innerText = 'Inglaterra - Década de los 80s';
//         modalDescription.innerText = 'Información sobre Inglaterra y su influencia musical en los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en Inglaterra.';
//         videoId = 'VIDEO_ID_ENGLAND'; // Reemplaza con el ID del video de YouTube para Inglaterra
//     } else if (locationId === 'Noruega') {
//         modalTitle.innerText = 'Noruega - Década de los 80s';
//         modalDescription.innerText = 'Información sobre Noruega y su influencia musical en los 80s.';
//         modalImpact.innerText = 'Impacto de la música de los 80s en Noruega.';
//         videoId = 'VIDEO_ID_NORWAY'; // Reemplaza con el ID del video de YouTube para Noruega
//     }

//     // Establece el enlace del video de YouTube en el iframe
//     modalVideo.src = `https://www.youtube.com/embed/${videoId}`;
// }

// function closeModal() {
//     document.getElementById('myModal').style.display = 'none';
//     document.querySelector('.modal-video iframe').src = ''; // Limpia el iframe cuando se cierra el modal
// }

// // Cierra el modal si se hace clic fuera de él
// window.onclick = function (event) {
//     const modal = document.getElementById('myModal');
//     if (event.target === modal) {
//         closeModal();
//     }
// }




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


