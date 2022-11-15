//* Обьявление всех переменных
// Поле ввода итоговой суммы чека
const totalPriceElement = document.querySelector('.app__bill-total')

// Поле ввода количества человек за столом
const numberPeopleElement = document.querySelector('.app__people-total')

// Псевдомассив кнопок процентов чаевых
const containerCustomTipsElement = document.querySelector('app__tip-all')
const customTipsElements = document.querySelectorAll('.app__tip-choice')

// Итоговая сумма чаевых
const totalTipsElement = document.querySelector('.app__view-total span')

// Итоговая сумма чаевых на человека
const tipsOnPeopleElement = document.querySelector('.app__view-amount span')

// Кнопка сброса данных
const resetBtnElement = document.querySelector('.app__reset')

// Набор цифр, которые можно вводить
const validNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']

//* Алгоритмы событий
// Ограничение количества вводимых данных человек
function handlerMaxLengthPeople () {
  if (numberPeopleElement.value.length >= 2) {
    numberPeopleElement.value = numberPeopleElement.value.slice(0, 2)
    return
  }
}

// Ограничение ввода суммы чека
function handlerInputTotalPrice () {
  const value = totalPriceElement.value
  if (!validNumbers.includes(value[value.length - 1])) {
    console.log(value)

  }
}

// Удаление активного класса
function deleteClass() {
  const arrtips = [...customTipsElements]
  arrtips.forEach(item => item.classList.remove('--active'))
}

// Переключатель класса
function handlerToggleTips(event) {
  const target = event.target
  if (!target.closest('.app__tip-choice')) return
  deleteClass()
  target.classList.toggle('--active')
}

// Подсчёт суммы чаевых
let percent = 10
function calcTips() {
  const arrtips = [...customTipsElements]
  const activeTips = arrtips.filter(tip => tip.className.includes('--active'))
  const valueTips = +activeTips[0].value.slice(0, 2)
  const tips = totalPriceElement.value / 100 * valueTips
  totalTipsElement.textContent = tips.toFixed(3)

  calcTipsOnPerson( +totalTipsElement.textContent )
}

// Подсчёт суммы чаевых на человека
function calcTipsOnPerson (price) {
 tipsOnPeopleElement.textContent = (price / numberPeopleElement.value).toFixed(3)
}

// Сброс полей ввода
function resetForm(event) {
  if (event.target !== resetBtnElement) return
  totalPriceElement.value = ''
  numberPeopleElement.value = ''
  totalTipsElement.textContent = '0'
  tipsOnPeopleElement.textContent = '0'
  deleteClass()
}

//* Обработчики событий
totalPriceElement.addEventListener('input', handlerInputTotalPrice)
totalPriceElement.addEventListener('input', calcTips)
numberPeopleElement.addEventListener('input', handlerMaxLengthPeople)
numberPeopleElement.addEventListener('input', calcTips)
window.document.addEventListener('click', handlerToggleTips)
window.document.addEventListener('click', resetForm)
containerCustomTipsElement.addEventListener('click', calcTips)
containerCustomTipsElement.addEventListener('input', calcTips)