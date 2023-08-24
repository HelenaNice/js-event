const focusInput = document.getElementById('focusInput')
const focusMessage = document.getElementById('focusMessage')

// Обробник події "focusin"
focusInput.addEventListener('focusin', () => {
  focusMessage.textContent =
    'Елемент отримав фокус (focusin)'
  focusMessage.style.color = 'green'
})

// Обробник події "focus"для валідацій часто
focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Елемент отримав фокус (focus)'
  focusMessage.style.color = 'blue'
})

// Обробник події "blur" ля валідацій часто
focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Елемент втратив фокус'
  focusMessage.style.color = 'red'
})

// Обробник події "focusout"
focusInput.addEventListener('focusout', () => {
  focusMessage.textContent =
    'Елемент втратив фокус (focusout)'
  focusMessage.style.color = 'orange'
})
