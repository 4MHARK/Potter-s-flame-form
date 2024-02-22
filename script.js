document.getElementById('jobApplicationForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Perform validation
    if (validateForm()) {
      // If validation passes, submit the form using its native submit() method
      this.submit();
    }
  });
  
  function validateForm() {
    let isValid = true;
  
    // Check if required fields are filled out
    const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('error');
      } else {
        field.classList.remove('error');
      }
    });
  
    return isValid;
  }
  