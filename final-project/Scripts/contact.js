document.addEventListener('DOMContentLoaded', () => {
    setupMenuToggle();
    setupFormHandling();
    setupDarkModeToggle();
    setupContactFormToggle();
    populateWorkouts();
    document.getElementById('last-modified').textContent = document.lastModified;
});

function setupFormHandling() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    const cancelButton = document.getElementById('contact-cancel');

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
                contactForm.reset();
            }
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', () => {
            contactForm.reset();
            confirmationMessage.style.display = 'none';
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
