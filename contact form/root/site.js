document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const successMessage = form.querySelector('.success-message');

    // Reset form state
    form.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error', 'success');
    });
    successMessage.style.display = 'none';

    // Validate form
    let isValid = true;

    // Validate name
    const nameInput = form.elements.fullName;
    if (nameInput.value.trim().length < 2) {
        nameInput.closest('.form-group').classList.add('error');
        isValid = false;
    } else {
        nameInput.closest('.form-group').classList.add('success');
    }

    // Validate email
    const emailInput = form.elements.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.closest('.form-group').classList.add('error');
        isValid = false;
    } else {
        emailInput.closest('.form-group').classList.add('success');
    }

    // Validate subject
    const subjectInput = form.elements.subject;
    if (subjectInput.value.trim().length < 3) {
        subjectInput.closest('.form-group').classList.add('error');
        isValid = false;
    } else {
        subjectInput.closest('.form-group').classList.add('success');
    }

    // Validate message
    const messageInput = form.elements.message;
    if (messageInput.value.trim().length < 10) {
        messageInput.closest('.form-group').classList.add('error');
        isValid = false;
    } else {
        messageInput.closest('.form-group').classList.add('success');
    }

    if (isValid) {
        submitBtn.classList.add('loading');

        // Simulate form submission
        setTimeout(() => {
            submitBtn.classList.remove('loading');
            successMessage.style.display = 'block';
            form.reset();

            // Reset success states after showing message
            setTimeout(() => {
                form.querySelectorAll('.form-group').forEach(group => {
                    group.classList.remove('success');
                });
            }, 3000);
        }, 1500);
    }
});

// Add live validation on input
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('input', function () {
        const formGroup = this.closest('.form-group');
        if (formGroup) {
            formGroup.classList.remove('error', 'success');
        }
    });
});
