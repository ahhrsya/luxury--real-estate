/* ============================================
   AURUM ESTATES — Form Handler
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initForm();
});

function initForm() {
  const form = document.getElementById('inquiryForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMsg = document.getElementById('formSuccess');

  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate
    if (!validateForm(form)) return;

    // Simulate submit
    submitBtn.textContent = 'Sending...';
    submitBtn.classList.add('btn--submitting');

    setTimeout(() => {
      submitBtn.textContent = 'Received. We will be in touch.';
      submitBtn.classList.remove('btn--submitting');
      submitBtn.classList.add('btn--success');

      // Show success, hide form
      setTimeout(() => {
        form.style.display = 'none';
        successMsg.classList.add('active');
      }, 1200);
    }, 1800);
  });

  // Real-time validation feedback
  const inputs = form.querySelectorAll('.form-input, .form-select');
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    input.addEventListener('input', () => {
      // Remove error state while typing
      if (input.classList.contains('form-input--error')) {
        input.classList.remove('form-input--error');
        const errorEl = input.parentElement.querySelector('.form-error');
        if (errorEl) errorEl.remove();
      }
    });
  });
}

function validateForm(form) {
  const fields = form.querySelectorAll('[required]');
  let valid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      valid = false;
    }
  });

  return valid;
}

function validateField(field) {
  const value = field.value.trim();
  let valid = true;
  let message = '';

  // Remove existing error
  field.classList.remove('form-input--error');
  const existingError = field.parentElement.querySelector('.form-error');
  if (existingError) existingError.remove();

  // Required check
  if (field.hasAttribute('required') && !value) {
    valid = false;
    message = 'This field is required.';
  }

  // Email check
  if (valid && field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      valid = false;
      message = 'Please enter a valid email address.';
    }
  }

  // Phone check (basic)
  if (valid && field.type === 'tel' && value) {
    const phoneRegex = /^[+]?[\d\s\-().]{7,20}$/;
    if (!phoneRegex.test(value)) {
      valid = false;
      message = 'Please enter a valid phone number.';
    }
  }

  if (!valid) {
    field.classList.add('form-input--error');
    const errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    errorEl.textContent = message;
    errorEl.style.cssText = `
      font-size: 0.7rem;
      color: #D4634B;
      margin-top: 0.25rem;
      display: block;
    `;
    field.parentElement.appendChild(errorEl);
  }

  return valid;
}

// Add error styles dynamically
const style = document.createElement('style');
style.textContent = `
  .form-input--error {
    border-color: #D4634B !important;
    box-shadow: 0 0 0 2px rgba(212, 99, 75, 0.15) !important;
  }
`;
document.head.appendChild(style);
