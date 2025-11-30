
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open');
    
    // Update aria-expanded for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);

    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}


menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu();
        }
    });
});

window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    
    // Calculate scroll percentage
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();
        
        // Get form values
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const messageInput = document.getElementById('message').value;
        
        if (nameInput.trim() === '' || emailInput.trim() === '' || messageInput.trim() === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.className = 'error';
            return;
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput)) {
            messageDiv.textContent = 'Please enter a valid email address.';
            messageDiv.className = 'error';
            return;
        }
        
        messageDiv.textContent = `Thank you ${nameInput}! Your message has been sent successfully.`;
        messageDiv.className = 'success';
        
        console.log('Form Data:', {
            name: nameInput,
            email: emailInput,
            message: messageInput
        });
        
        contactForm.reset();
    
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    });
}