const button = document.querySelector('.form__button')

// Обробник події "fullscreenchange"алерты блокируют полноекранку, надо скрыть
document.addEventListener('fullscreenchange', (e) => {
  console.log(e)

  alert(
    `Повноекраний режим ${
      document.fullscreenElement !== null
        ? 'увімкнуто'
        : 'вимкнуто'
    }.`,
  )
})

// Обробник події "fullscreenerror"
document.addEventListener('fullscreenerror', (e) => {
  console.log(e)
  alert(
    'Помилка при спробі перейти до повноекранного режиму.',
  )
})

// Обробник натискання на кнопку повноекранного режиму
button.addEventListener('click', () => {
  // клик на цю кнопку це вхід та вихід з повноекранного режиму
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
  const body = document.documentElement
  if (body.requestFullscreen) {
    body.requestFullscreen()
  } else {
    alert('Повноекранний режим не підтримується.')
  }
})
