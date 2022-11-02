const russians = document.querySelectorAll('.russian');
const englishs = document.querySelectorAll('.english');
const language = document.querySelectorAll('input[type="radio"]');


language.forEach(input => {
  input.addEventListener('change', switchLanguage)
})

function switchLanguage(element) {
  let lang = element.target.value;

  if (lang === 'ru') {
    russians.forEach(item => {
      item.classList.remove('hidden')
    })
    englishs.forEach(item => {
      item.classList.add('hidden')
    })
  } else {
    russians.forEach(item => {
      item.classList.add('hidden')
    })
    englishs.forEach(item => {
      item.classList.remove('hidden')
    })
  }
  
}
