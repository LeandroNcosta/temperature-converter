const firstSelect = document.querySelector('#firstSelect')
const secondSelect = document.querySelector('#secondSelect')
const input = document.querySelector('#input')
const button = document.querySelector('button')
const btnReverse = document.querySelector('.reverse-icon')
const celsiusUnit = ' C', fahrenheitUnit = ' F', kelvinUnit = ' K'
let result = document.querySelector('#result')

const showOnScreen = (resultCalculation, unit) => {
  result.textContent = resultCalculation.toFixed(2) + unit
}

const NotSelectEqualTemperatures = () => {
  const selectedTemperature = firstSelect.value

  switch (selectedTemperature) {
    case 'Celsius':
      secondSelect[1].style.display = 'none'
      secondSelect[2].style.display = 'block'
      secondSelect[3].style.display = 'block'
      break
    case 'Fahrenheit':
      secondSelect[2].style.display = 'none'
      secondSelect[1].style.display = 'block'
      secondSelect[3].style.display = 'block'
      break
    default:
      secondSelect[3].style.display = 'none'
      secondSelect[2].style.display = 'block'
      secondSelect[1].style.display = 'block'
      break
  }
}

const convertCelsiusTo = (selectedCelsius) => {
  const CelsiusToFahrenheit = firstSelect.value === 'Celsius' && secondSelect.value === 'Fahrenheit'
  const formCelsiusToFahrenheit = (Number(input.value) * 1.8) + 32
  const formCelsiusToKelvin = Number(input.value) + 273.15

  if (CelsiusToFahrenheit) {
    showOnScreen(formCelsiusToFahrenheit, fahrenheitUnit)
    return
  }
  showOnScreen(formCelsiusToKelvin, kelvinUnit)
}

const convertFahrenheitTo = (selectedFahrenheit) => {
  const FahrenheitToCelsius = firstSelect.value === 'Fahrenheit' && secondSelect.value === 'Celsius'
  const formFahrenheitToCelsius = (Number(input.value) - 32) / 1.8
  const formFahrenheitToKelvin = (Number(input.value) - 32) * 5 / 9 + 273.15

  if (FahrenheitToCelsius) {
    showOnScreen(formFahrenheitToCelsius, celsiusUnit)
    return
  }
  showOnScreen(formFahrenheitToKelvin, kelvinUnit)
}

const convertKelvinTo = (selectedKelvin) => {
  const KelvinToCelsius = firstSelect.value === 'Kelvin' && secondSelect.value === 'Celsius'
  const formKelvinToCelsius = Number(input.value) - 273.15
  const formKelvinToFahrenheit = (Number(input.value) - 273.15) * 9 / 5 + 32

  if (KelvinToCelsius) {
    showOnScreen(formKelvinToCelsius, celsiusUnit)
    return
  }
  showOnScreen(formKelvinToFahrenheit, fahrenheitUnit)
}

const convertTemperatures = () => {
  const noOptionSelected = firstSelect.value == "" || secondSelect.value == ""
  const selectedCelsius = firstSelect.value === 'Celsius'
  const selectedFahrenheit = firstSelect.value === 'Fahrenheit'
  const selectedKelvin = firstSelect.value === 'Kelvin'

  if (noOptionSelected) {
    result.textContent = 'Por favor, selecione alguma temperatura'
    return
  }

  if (selectedCelsius) {
    convertCelsiusTo(selectedCelsius)
  } else if (selectedFahrenheit) {
    convertFahrenheitTo(selectedFahrenheit)
  } else {
    convertKelvinTo(selectedKelvin)
  }
  input.focus()
}

const reverseTemperatures = () => {
  btnReverse.classList.toggle('rotate')
  const x = firstSelect.value
  firstSelect.value = secondSelect.value
  secondSelect.value = x
}

firstSelect.addEventListener('change', NotSelectEqualTemperatures)
btnReverse.addEventListener('click', reverseTemperatures)
button.addEventListener('click', convertTemperatures)

