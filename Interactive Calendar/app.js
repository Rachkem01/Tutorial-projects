const monthEl = document.getElementById('month');

const dayNameEl = document.getElementById('day')

const dateEl = document.getElementById('date')

const year = document.getElementById('year')

const date = new Date()
const month = date.getMonth()
monthEl.innerHTML =date.toLocaleString("en", {
    month:"long",
})
dateEl.innerHTML = date.getDate();
year.innerHTML = date.getFullYear()
dayNameEl.innerHTML= date.toLocaleString("en", {
    weekday:"long"
})