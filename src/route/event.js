// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки

router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',
    component: [],
    title: 'Головна сторінка',
    data: {},
  })
})

router.get('/1', function (req, res) {
  res.render('1', {
    name: '1',
    component: [],
    title: 'Тип події: Друк сторінки',
    data: {},
  })
})

router.get('/2', function (req, res) {
  res.render('2', {
    name: '2',
    component: [],
    title: 'Тип події: Зміна значення елемента',
    data: {},
  })
})

router.get('/3', function (req, res) {
  res.render('3', {
    name: '3',
    component: [],
    title: 'Тип події: Повно-екранний режим',
    data: {},
  })
})

router.get('/4', function (req, res) {
  res.render('4', {
    name: '4',
    component: [],
    title: 'Тип події: Форма',
    data: {},
  })
})

router.get('/5', function (req, res) {
  res.render('5', {
    name: '5',
    component: [],
    title: 'Тип події: Поле вводу',
    data: {},
  })
})

router.get('/6', function (req, res) {
  res.render('6', {
    name: '6',
    component: [],
    title: 'Тип події: Перемикання details',
    data: {},
  })
})

router.get('/7', function (req, res) {
  res.render('7', {
    name: '7',
    component: [],
    title: 'Тип події: Стан мережі',
    data: {},
  })
})

router.get('/8', function (req, res) {
  res.render('8', {
    name: '8',
    component: [],
    title: 'Тип події: Стан завантаження',
    data: {},
  })
})

router.get('/9', function (req, res) {
  res.render('9', {
    name: '9',
    component: [],
    title: 'Тип події: Стан сторінки',
    data: {},
  })
})

router.get('/10', function (req, res) {
  res.render('10', {
    name: '10',
    component: [],
    title: 'Тип події: Виділення тексту',
    data: {},
  })
})

router.get('/drag', function (req, res) {
  res.render('drag', {
    name: 'drag',
    component: [],
    title: 'Тип події: Перетягування',
    data: {},
  })
})

router.get('/clipboard', function (req, res) {
  res.render('clipboard', {
    name: 'clipboard',
    component: [],
    title: 'Тип події: Буфер обміну',
    data: {},
  })
})

router.get('/focus', function (req, res) {
  res.render('focus', {
    name: 'focus',
    component: [],
    title: 'Тип події: Фокус користувача',
    data: {},
  })
})

router.get('/popstate', function (req, res) {
  res.render('popstate', {
    name: 'popstate',
    component: [],
    title: 'Тип події: Відстеження змін у стеку історії',
    data: {},
  })
})

router.get('/hash', function (req, res) {
  res.render('hash', {
    name: 'hash',
    component: [],
    title: 'Тип події: Зміна якоря',
    data: {},
  })
})

router.get('/mouse', function (req, res) {
  res.render('mouse', {
    name: 'mouse',
    component: [],
    title: 'Тип події: Взаємодія з мишкою',
    data: {},
  })
})

router.get('/key', function (req, res) {
  res.render('key', {
    name: 'key',
    component: [],
    title: 'Тип події: Введення з клавіатури',
    data: {},
  })
})

router.get('/pointer', function (req, res) {
  res.render('pointer', {
    name: 'pointer',
    component: [],
    title: 'Тип події: Покажчик',
    data: {},
  })
})

router.get('/input', function (req, res) {
  res.render('input', {
    name: 'input',
    component: [],
    title: 'Тип події: Введення даних',
    data: {},
  })
})

router.get('/page-transition', function (req, res) {
  res.render('page-transition', {
    name: 'page-transition',
    component: [],
    title: 'Тип події: Зміна видимості сторінки',
    data: {},
  })
})

router.get('/wheel', function (req, res) {
  res.render('wheel', {
    name: 'wheel',
    component: [],
    title: 'Тип події: Прокручування колеса миші',
    data: {},
  })
})

router.get('/touch', function (req, res) {
  res.render('touch', {
    name: 'touch',
    component: [],
    title: 'Тип події: Взаємодія з сенсорним пристроєм',
    data: {},
  })
})

router.get('/transition', function (req, res) {
  res.render('transition', {
    name: 'transition',
    component: [],
    title: 'Тип події: CSS-перехід',
    data: {},
  })
})

router.get('/progress', function (req, res) {
  res.render('progress', {
    name: 'progress',
    component: [],
    title: 'Тип події: Відстеження прогресу',
    data: {},
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
