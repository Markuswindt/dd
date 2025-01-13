document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.getElementById('images');
    const images = imagesContainer.querySelectorAll('img');
    const totalImages = images.length;

    function handleInteraction(xPos) {
        const containerWidth = imagesContainer.offsetWidth;
        const segmentWidth = containerWidth / totalImages;
        const xIndex = Math.floor(xPos / segmentWidth);

        // Reset all z-index values
        images.forEach(img => {
            img.style.zIndex = '0';
        });

        // Set z-index of the relevant image
        if (xIndex >= 0 && xIndex < totalImages) {
            images[xIndex].style.zIndex = '1';
        }
    }

    imagesContainer.addEventListener('mousemove', (e) => {
        const rect = imagesContainer.getBoundingClientRect();
        const xPos = e.pageX - rect.left;  // Mouse X position relative to the container
        handleInteraction(xPos);
    });

    imagesContainer.addEventListener('touchmove', (e) => {
        const rect = imagesContainer.getBoundingClientRect();
        const touch = e.touches[0];
        const xPos = touch.pageX - rect.left;  // Touch X position relative to the container
        handleInteraction(xPos);
    });
});