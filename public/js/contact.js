
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Create mailto link
      const mailtoSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
      const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoLink = `mailto:gargshaurya2005@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      // Open default mail client
      window.location.href = mailtoLink;
      
      // Show success message
      alert('Opening email client. Please send the email to complete your message.');
      
      // Reset form
      contactForm.reset();
    });
  }
});
