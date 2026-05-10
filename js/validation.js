/**
 * validation.js — Read to Lead Bookstore
 * Real-time inline form validation for contact & checkout forms
 */

/** Valid email format */
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()); }

/** Show error below field */
function showError(field, message) {
  clearFieldState(field);
  field.classList.add('is-invalid');
  const div = document.createElement('div');
  div.className = 'field-error'; div.textContent = message;
  field.parentNode.insertBefore(div, field.nextSibling);
}

/** Mark field valid */
function showValid(field) {
  clearFieldState(field);
  field.classList.add('is-valid');
}

/** Clear field validation state */
function clearFieldState(field) {
  field.classList.remove('is-invalid','is-valid');
  const old = field.parentNode.querySelector('.field-error');
  if (old) old.remove();
}

/** Get error message for a key */
function errMsg(key, replacements={}) {
  let msg = (typeof t === 'function') ? t(key) : key;
  Object.keys(replacements).forEach(k => { msg = msg.replace(`{${k}}`, replacements[k]); });
  return msg;
}

/** Validate a single field */
function validateField(field) {
  const value = field.value.trim();
  const label = field.dataset.label || 'Field';

  // Required check
  if (field.required && !value) { showError(field, errMsg('errRequired')); return false; }
  if (!value && !field.required) { clearFieldState(field); return true; }

  const vtype = field.dataset.validate;
  switch(vtype) {
    case 'email':
      if (!isValidEmail(value)) { showError(field, errMsg('errEmail')); return false; } break;
    case 'phone':
      if (!/^\+?[\d\s\-()\u06F0-\u06F9]{7,15}$/.test(value)) { showError(field, errMsg('errPhone')); return false; } break;
    case 'minlength': {
      const min = parseInt(field.dataset.min||20);
      if (value.length < min) { showError(field, errMsg('errMinLength',{min})+` (${value.length}/${min})`); return false; } break;
    }
    case 'card': {
      const digits = value.replace(/\s/g,'');
      if (!/^\d{16}$/.test(digits)) { showError(field, errMsg('errCard')); return false; } break;
    }
    case 'expiry': {
      if (!/^\d{2}\/\d{2}$/.test(value)) { showError(field, errMsg('errExpiry')); return false; }
      const [m,y] = value.split('/').map(Number);
      if (m<1||m>12||new Date(2000+y,m-1)<new Date()) { showError(field, errMsg('errExpiry')); return false; } break;
    }
    case 'cvv':
      if (!/^\d{3}$/.test(value)) { showError(field, errMsg('errCVV')); return false; } break;
    case 'zip':
      if (!/^\d{4,10}$/.test(value)) { showError(field, errMsg('errZip')); return false; } break;
  }
  showValid(field); return true;
}

/** Check form-wide validity for submit button */
function checkFormValidity(form, btn) {
  if (!btn) return;
  const required = form.querySelectorAll('[required]');
  const allFilled = Array.from(required).every(f=>f.value.trim()!=='');
  const hasErrors = form.querySelectorAll('.is-invalid').length>0;
  btn.disabled = !allFilled || hasErrors;
}

/** Bind validation events to all fields in a form */
function initFormValidation(formId, submitBtnId) {
  const form = document.getElementById(formId);
  const btn = document.getElementById(submitBtnId);
  if (!form) return;
  const fields = form.querySelectorAll('[data-validate],[required]');

  fields.forEach(field => {
    // Validate on blur
    field.addEventListener('blur', () => { validateField(field); checkFormValidity(form,btn); });
    field.addEventListener('input', () => {
      if (field.classList.contains('is-invalid')) validateField(field);
      checkFormValidity(form,btn);
      // Auto-format card number as XXXX XXXX XXXX XXXX
      if (field.dataset.validate==='card') {
        const d = field.value.replace(/\D/g,'').substring(0,16);
        field.value = d.replace(/(.{4})/g,'$1 ').trim();
      }
      // Auto-format expiry as MM/YY
      if (field.dataset.validate==='expiry') {
        let v = field.value.replace(/\D/g,'').substring(0,4);
        if (v.length>2) v = v.substring(0,2)+'/'+v.substring(2);
        field.value = v;
      }
    });
  });

  // Submit handler
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    fields.forEach(f => { if (!validateField(f)) valid=false; });
    if (valid && typeof onFormSuccess==='function') onFormSuccess(formId);
  });
}

/** Contact form specific init */
function initContactForm() {
  initFormValidation('contact-form','contact-submit-btn');
  window.onFormSuccess = function(formId) {
    if (formId!=='contact-form') return;
    document.getElementById('contact-form').style.display='none';
    document.getElementById('contact-success').style.display='block';
  };
}
