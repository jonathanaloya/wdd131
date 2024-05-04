
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

// Update copyright year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);
document.getElementById('lastModified').textContent = formattedDate;