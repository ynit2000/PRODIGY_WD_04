document.addEventListener('DOMContentLoaded', function () {
    const showContactFormBtn = document.getElementById('showContactFormBtn');
    const contactFormContainer = document.getElementById('contactFormContainer');

    showContactFormBtn.addEventListener('click', function () {
        // Toggle the visibility of the contact form
        if (contactFormContainer.style.display === 'none' || contactFormContainer.style.display === '') {
            contactFormContainer.style.display = 'block';
        } else {
            contactFormContainer.style.display = 'none';
        }
    });
});