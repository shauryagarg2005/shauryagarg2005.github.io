
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const buttonText = submitButton.querySelector('.btn-text');
      const buttonLoading = submitButton.querySelector('.btn-loading');
      
      // Show loading state
      buttonText.classList.add('hidden');
      buttonLoading.classList.remove('hidden');
      submitButton.disabled = true;
      
      try {
        // Create mailto link with form data
        const subject = `Portfolio Contact: Message from ${formData.get('name')}`;
        const body = `Name: ${formData.get('name')}%0D%0A` +
                    `Email: ${formData.get('email')}%0D%0A%0D%0A` +
                    `Message:%0D%0A${formData.get('message')}`;
        const mailtoLink = `mailto:gargshaurya2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Open default mail client
        window.location.href = mailtoLink;
        
        // Show success message
        showToast('Opening email client. Please send the email to complete your message.', 'success');
        
        // Reset form
        contactForm.reset();
      } catch (error) {
        console.error('Form submission error:', error);
        showToast('Failed to open email client. Please try again or contact directly.', 'error');
      } finally {
        // Reset button state
        buttonText.classList.remove('hidden');
        buttonLoading.classList.add('hidden');
        submitButton.disabled = false;
      }
    });
  }

  function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Add toast to document
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    // Remove toast after delay
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }
});
