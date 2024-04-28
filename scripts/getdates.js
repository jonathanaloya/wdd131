// getdates.js
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
});