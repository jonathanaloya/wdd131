document.getElementById('last-modified').textContent = document.lastModified;

function learnMore() {
    alert('Discover more about our wellness programs!');
}

function joinCommunity() {
    alert('Join our community and start your wellness journey today!');
}

document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    setupFormHandling();
    setupDarkModeToggle();
    setupContactFormToggle();
    populateWorkouts();
});

function setupMenuToggle() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const closeIcon = document.getElementById('close-icon');
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuIcon.classList.toggle('open');
        closeIcon.classList.toggle('show');
    });
    closeIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuIcon.classList.toggle('show');
        closeIcon.classList.toggle('open');
    });
}

function setupContactFormToggle() {
    const contactButton = document.getElementById('contact-button');
    const contactIcon = document.querySelector('.contact-icon');
    const contactFormContainer = document.getElementById('contact-form-container');
    const formCloseButton = document.getElementById('form-close-button');

    const toggleForm = () => {
        contactFormContainer.style.display = contactFormContainer.style.display === 'block' ? 'none' : 'block';
    };

    contactButton.addEventListener('click', toggleForm);
    contactIcon.addEventListener('click', toggleForm);
    formCloseButton.addEventListener('click', toggleForm);
    contactFormContainer.addEventListener('click', (e) => {
        if (e.target === contactFormContainer) {
            contactFormContainer.style.display = 'none';
        }
    });
}

function setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const FirstName = document.getElementById('FirstName').value;
            const LastName = document.getElementById('LastName').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const selectedWorkouts = [...document.querySelectorAll('#workouts-container input[type="checkbox"]:checked')].map(cb => cb.value);

            if (validateForm(FirstName, LastName, email, message)) {
                displayConfirmation(FirstName, LastName, selectedWorkouts);
            }
        });
    }
}

function validateForm(FirstName, LastName, email, message) {
    if (!FirstName || !LastName || !email || !message) {
        alert('All fields are required.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function displayConfirmation(FirstName, LastName, workouts) {
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = `Thank you, ${FirstName} ${LastName}, for reaching out to us! You have selected the following workouts: ${workouts.join(', ')}. We will get back to you soon.`;
    confirmationMessage.style.display = 'block';
}

function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkMode = localStorage.getItem('darkMode') === 'enabled';

    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

function populateWorkouts() {
    const workouts = [
        { name: 'Yoga', description: 'A relaxing workout for flexibility and balance.' },
        { name: 'HIIT', description: 'High-intensity interval training for a quick, intense workout.' },
        { name: 'Strength Training', description: 'Build muscle and strength with targeted exercises.' }
    ];

    const workoutsContainer = document.getElementById('workouts-container');
    workouts.forEach(workout => {
        const checkbox = document.createElement('div');
        checkbox.className = 'workout-checkbox';
        checkbox.innerHTML = `
            <input type="checkbox" id="${workout.name}" name="workout" value="${workout.name}">
            <label for="${workout.name}">${workout.name} - ${workout.description}</label>
        `;
        workoutsContainer.appendChild(checkbox);
    });
}
