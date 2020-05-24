

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


function res(num){
    switch (num) {
        case 0:
            console.log('Вторник!')
            break
        case 1:
            console.log('Среда!')
            break
        case 2:
            console.log('Четверг!')
            break
        case 3:
            console.log('Пятница!')
            break
        case 4:
            console.log('Суботта!')
            break
        case 5:
            console.log('Воскресенье!')
            break
        case 6:
            console.log('Понедельник!')
            break                                
        default:
            break
    }
}


