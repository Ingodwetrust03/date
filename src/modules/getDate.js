'use strict'

const getDate = ()=>{
    const daysArray = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',]
    let dayTime = document.getElementById('dayTime')
    let day = document.getElementById('day')
    let time = document.getElementById('time')
    let daysToNewYear = document.getElementById('daysToNewYear')
    let dayTimeLetter = document.getElementById('dayTimeLetter')

    const nowDate = new Date()
    const nowDateMiliseconds = new Date().getTime()
    const getDay = nowDate.getDay()
    let currentDay = daysArray[getDay]
    day.textContent = currentDay

    let hours = nowDate.getHours()
    let currentTime = nowDate.getHours() + ':' + nowDate.getMinutes() + ':'+ nowDate.getSeconds()
    time.textContent = currentTime

    let newYearDay = '31 december 2021'
    let newYearDate = new Date(newYearDay).getTime()
    let timeRemainingToNewYear = Math.floor(((((newYearDate - nowDateMiliseconds) / 1000) / 60 ) / 60) / 24)
    daysToNewYear.textContent = timeRemainingToNewYear

   switch (true){
        case hours >= 3 && hours < 11:
            dayTime.textContent = 'Доброе утро!'
            break;
        case hours >= 11 && hours < 16:
            dayTime.textContent = 'Добрый день!'
            break;
        case hours >= 16 && hours <= 21:
            dayTime.textContent = 'Добрый вечер!'
            break;
        default:
            dayTime.textContent = 'Доброй ночи!'
            break;
   }
        
        
    if (hours >= 0 && hours < 12) {
        dayTimeLetter.textContent = 'AM'
    } dayTimeLetter.textContent = 'PM'
        

}

export default getDate