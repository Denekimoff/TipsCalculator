//* Обьявление всех переменных
  // Поле ввода итоговой суммы чека
const totalPriceElement = document.querySelector('.app__bill-total')

  // Поле ввода количества человек за столом
const numberPeopleElement = document.querySelector('.app__people-total')

  // Псевдомассив кнопок процентов чаевых
const customTipsElements = document.querySelectorAll('.app__tip-choice')

  // Итоговая сумма чаевых
const totalTipsElement = document.querySelector('.app__view-total span')

  // Итоговая сумма чаевых на человека
const tipsOnPeopleElement = document.querySelector('.app__view-amount span')

  // Кнопка сброса данных
const resetBtnElement = document.querySelector('.app__reset')

//* Алгоритмы событий
  // Ограничение количества вводимых данных
function handleMaxLengthPeople () {
  if (numberPeopleElement.value.length >= 2) {
    numberPeopleElement.value = numberPeopleElement.value.slice(0, 2)
    return
  }
}

function hadleToggleTips (event) {
  const target = event.target
  console.log('click')
  if (!target.closest('.app__tip-choice')) return
  target.classList.toggle('--active')
  console.log('clacccck')
}

//* Обработчики событий
  // Изменение поля ввода количества человек
numberPeopleElement.addEventListener('input', handleMaxLengthPeople)
window.document.addEventListener('click', hadleToggleTips)