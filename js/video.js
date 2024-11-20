document.getElementById('btn-ver-ahora').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir que el enlace navegue a otra página
    
    var videoContainer = document.getElementById('video-container');
    var video = document.getElementById('video');
    
    if (videoContainer.classList.contains('hidden')) {
        videoContainer.classList.remove('hidden'); // Mostrar el video
        video.play(); // Reproducir el video
    } else {
        video.pause(); // Pausar el video
        videoContainer.classList.add('hidden'); // Ocultar el video
    }
});

