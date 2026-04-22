// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}




// Set minimum date to today for date picker
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Form Submission Handler
document.getElementById('bookingForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');
    
    // Get form data
    const formData = {
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        serviceType: this.serviceType.value,
        vehicleType: this.vehicleType.value,
        date: this.date.value,
        time: this.time.value,
        message: this.message.value
    };
    
    // Disable submit button
    submitBtn.enable = true;
    submitBtn.textContent = 'Submitting...';
    
    try {
        // In a real implementation, you would send this to your backend
        // For now, we'll simulate a successful submission
        
        // Example: Send to your email service
        // const response = await fetch('YOUR_EMAIL_API_ENDPOINT', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // });
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        statusMessage.className = 'status-message status-success';
        statusMessage.textContent = `Thank you for your booking request! We've sent a confirmation email to ${formData.email}. We'll contact you within 24 hours to confirm your appointment or suggest alternative times if needed.`;
        statusMessage.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Scroll to status message
        statusMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide success message after 10 seconds
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 10000);
        
    } catch (error) {
        console.error('Booking submission error:', error);
        
        // Show error message
        statusMessage.className = 'status-message status-error';
        statusMessage.textContent = 'Failed to submit booking. Please try again or call us at (661) 934-9484.';
        statusMessage.style.display = 'block';
        
        // Scroll to status message
        statusMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Booking Request';
    }
});

// Service Type Radio Button Visual Feedback
const serviceTypeOptions = document.querySelectorAll('.service-type-option input[type="radio"]');
serviceTypeOptions.forEach(radio => {
    radio.addEventListener('change', function() {
        // Remove active class from all options
        document.querySelectorAll('.service-type-option').forEach(option => {
            option.classList.remove('active');
        });
        // Add active class to selected option
        if (this.checked) {
            this.closest('.service-type-option').classList.add('active');
        }
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});


