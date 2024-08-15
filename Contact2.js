document.addEventListener('DOMContentLoaded', function () {
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const gender = document.querySelector('input[name="gender"]:checked');

        if (!name.value.trim()) {
            alert('Please enter your name.');
            name.focus();
            return;
        }

        if (!email.value.trim() || !validateEmail(email.value.trim())) {
            alert('Please enter a valid email address.');
            email.focus();
            return;
        }

        if (!phone.value.trim() || !validatePhone(phone.value.trim())) {
            alert('Please enter a valid phone number.');
            phone.focus();
            return;
        }

        if (!gender) {
            alert('Please select your gender.');
            return;
        }

        // If all validations pass, submit the form
        alert("Form submitted successfully!");
        form.submit();
    });

    // Email validation regex
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Phone number validation regex (basic validation, adapt as needed)
    function validatePhone(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    }

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Responsive menu toggle (if applicable)
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Change cursor to 'I' beam when label is clicked
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.addEventListener('mousedown', function () {
            document.body.style.cursor = 'text'; // Change cursor to 'I' beam on mousedown
        });
        
        label.addEventListener('mouseup', function () {
            document.body.style.cursor = 'default'; // Reset cursor to default after mouse up
        });
    });

    // Ensure clicking labels triggers associated input focus
    labels.forEach(label => {
        label.addEventListener('click', function () {
            const inputId = label.getAttribute('for');
            if (inputId) {
                document.getElementById(inputId).focus();
            }
        });
    });
});


