// відслідковувати події зміни якоря, наприклад обрали посилання 1 або 2
// Додати обробник події "hashchange" для відстеження змін у фрагменті ідентифікатора URL
window.addEventListener('hashchange', (event) => {
  const newHash = event.newURL.split('#')[1]

  alert(`Змінено хеш на: ${newHash}`)
})
