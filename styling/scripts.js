function toggleMenu() {
    const navLinks = document.querySelector('nav ul');  // Select the nav ul
    if (navLinks) {
        navLinks.classList.toggle('active');  // Toggle 'active' class
    }
}

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle the active class
        header.classList.toggle('active');

        // Show or hide the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
