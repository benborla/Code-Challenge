const STATE_PENDING = 'pending'
const STATE_DONE = 'done'

const bouncer = new Bouncer('[data-validate]', {
  // Form Submission
  disableSubmit: true, // If true, native form submission is suppressed even when form validates
  // Custom Events
  emitEvents: true // If true, emits custom events
})

const setButtonState = state => {
  const sendButton = document.querySelector('button[type=submit]')

  switch (state) {
    case STATE_PENDING:
      sendButton.innerHTML = '<div class="fa-1x"><i class="fas fa-spinner fa-spin"></i> Sending</div>'
      sendButton.disabled = true
      sendButton.classList.replace('hover:bg-indigo-700', 'hover:bg-indigo-500')
      sendButton.classList.add('cursor-not-allowed')
      break
    case STATE_DONE:
    default:
      sendButton.innerHTML = '<i class="fas fa-check"></i> Sent'
      sendButton.classList.replace('bg-indigo-500', 'bg-green-500')
      sendButton.classList.replace('hover:bg-indigo-500', 'hover:bg-green-700')
      sendButton.classList.remove('cursor-not-allowed')
      // to prevent another transaction
      sendButton.disabled = true
  }
}

/** Handle Form Submit **/
document.addEventListener('bouncerFormValid', e => {
  setButtonState(STATE_PENDING)

  // simulate async AJAX request
  setTimeout(() => {
    setButtonState(STATE_DONE)

    // return to original state
    setTimeout(() => {
      location.reload()
    }, 1000)
  }, 3000)

  e.preventDefault()
}, false)
