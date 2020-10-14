document.querySelectorAll('.tabs-triggers__item').forEach(item =>
    item.addEventListener('click', function (event) {
    event.preventDefault()
    const id = event.target.getAttribute('href').replace('#', '')
        console.log('id', id)

    document.querySelectorAll('.tabs-triggers__item').forEach(
        child => child.classList.remove('tabs-triggers__item--active'))

    document.querySelectorAll('.tabs-content__item').forEach(
        child => child.classList.remove('tabs-content__item--active'))

    item.classList.add('tabs-triggers__item--active')
    document.getElementById(id).classList.add('tabs-content__item--active')
  })
)

document.querySelector('.tabs-triggers__item').click()