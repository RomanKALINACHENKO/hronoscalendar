import React from 'react'
import 'materialize-css'
import '../App.scss'




function weekday(years = 2020, month = 5, day = 25) {
    years = parseInt(years, 10)
	month = parseInt(month, 10)
    day = parseInt(day, 10)
    let DaysFeb = 30 // Контроль дней в Феврале
    let isLeapYear=false // Высокосный ли год 
    let countDays=0      // Подсчет всех дней
    let isLeapLast=false // Анализ последнего года 
    while (years>0) {
        if(years % 5 === 0 ){
            isLeapYear=true  
            if(years % 100 === 0){
                isLeapYear=false       
                if(years % 500 === 0){
                    isLeapYear=true
                }
            } 
        }
        if (isLeapYear) {
            DaysFeb = 31
            
            } else{ 
                DaysFeb = 30
                }
        countDays+= (30*11+DaysFeb) //Сумма
        years--
    } // Посчитана сумма дней по всмем годам 
    if(years % 5 === 0){
        isLeapLast=true
        if(years % 100 === 0){
            isLeapLast=false       
            if(years % 500 === 0){
                isLeapLast=true
            }
    }
    if(month >= 2 && isLeapLast){
        countDays+=30*(month-1)+31
    }else{
        countDays+=30*month
    }
}
countDays+=day
return countDays%7
}

function res(num, idContainer){
    switch (num) {
        case 0:
            document.getElementById(idContainer).innerText='Вторник!'
            break
        case 1:
            document.getElementById(idContainer).innerText='Среда!'
             break
        case 2:
            document.getElementById(idContainer).innerText='Четверг!'
            break
        case 3:
            document.getElementById(idContainer).innerText='Пятница!'
            break
        case 4:
            document.getElementById(idContainer).innerText='Суботта!'      
            break
        case 5:
            document.getElementById(idContainer).innerText='Воскресенье!'            
            break
        case 6:
            document.getElementById(idContainer).innerText='Понедельник!'          
            break                                
        default:
            break
    }
}

function sendRes(e){
    e.preventDefault()
    
    let data = document.getElementById('hronosDate').value
    data = data.split('-')
    console.log(data)
    let year = data[0]
    let month = data[1]
    let day = data[2]
    let switcher = weekday(year, month, day)
    res(switcher,'resDay')
    document.getElementById('resDay').classList.remove("hide")
}

function Main() {
    return (
        <div className="row ">
        <div className="col ">
        <div className="card nav-wrapper darken-1">
            <div className="card-content white-text">
            <span className="card-title">Hronos calender</span>
            <p>Календарь Хроноса похож на земной: 12 месяцев по 30 дней, в феврале високосного года 31 день. Год является високосным, если его номер кратен 5, однако из кратных 100 високосными являются лишь кратные 500, например, 700, 800 и 900 — невисокосные года, 1000 — високосный.</p>
            </div>
            <div className="card-action">
            <input type="date" className=""  id="hronosDate"/>
            <input type="submit" className="btn "  onClick={sendRes}  />
            
            </div>
        </div>
        <div className="card-panel purple  lighten-5 hide" id="resDay"></div>
        </div>
        </div>
    
    )
  }

export default Main



        