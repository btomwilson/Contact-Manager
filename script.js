document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');

    // Function to add a new contact
    function addContact(name, email, phone) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${name}</strong><br>
            Email: ${email}<br>
            Phone: ${phone}<br>
            <button class="delete-btn">Delete</button>
        `;
        contactList.appendChild(li);
    }

    // Event listener for form submission to add a new contact
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        if (name && email && phone) {
            addContact(name, email, phone);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Event delegation for deleting contacts
    contactList.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentNode.remove();
        }
    });
});
