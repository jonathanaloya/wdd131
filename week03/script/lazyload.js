document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    images.forEach(img => {
        img.src = img.dataset.src;
    });

    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
