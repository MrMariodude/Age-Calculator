/*Buttons to work*/ 
let calculateBtn = document.querySelector(".calculateBtn");
let restartBtnBtn = document.querySelector(".restartBtn");
/*Buttons to work*/
/*user selections*/
let month = document.querySelectorAll("#month");
let day = document.querySelectorAll("#day");
let year = document.querySelectorAll(".year");
/*user selections*/
/*output page*/
let output = document.querySelector(".borderOutputData");
/*output page*/
calculateBtn.addEventListener("click", ()=> {
    let monthValues = [];
    let dayValues = [];
    let yearValues = [];
    for(let i =0; i < month.length; i++) {
        monthValues[i] = (month[i].options[month[i].selectedIndex]).value;
        dayValues[i] = (day[i].options[day[i].selectedIndex]).value;
        yearValues[i] = year[i].value;
    }
    let month_0 = (month[0].options[month[0].selectedIndex]).value;
    let month_1 = (month[1].options[month[1].selectedIndex]).value;
    let day_0 = (day[0].options[day[0].selectedIndex]).value;
    let day_1 = (day[1].options[day[1].selectedIndex]).value;
    let year_0 = year[0].value;
    let year_1 = year[1].value;
    let dateOfBirth = new Date(year_0,(month_0 - 1 ), day_0);
    let currentDate = new Date(year_1,(month_1 - 1 ),day_1); 
    let ageInYears = currentDate.getFullYear() - dateOfBirth.getFullYear();
    if(currentDate.getMonth() < dateOfBirth.getMonth() || (currentDate.getMonth() === dateOfBirth.getMonth() && currentDate.getDate() < dateOfBirth.getDate())){
        ageInYears--;
    }
    
    const diffTime = Math.abs(currentDate - dateOfBirth);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = (diffDays % 365) % 30;

    console.log(years ,months , days);
    console.log(years*12 + months , days);
    console.log((Math.ceil(years*12 + months)*30/7) , days);




    let headLine = document.querySelector(".headerline");
    let YMD = document.createElement("h2");
    let MD = document.createElement("h2");
    let WD = document.createElement("h2");
    YMD.textContent = `${ageInYears} years ${months} months ${days} days`;
    MD.textContent =  `${years*12 + months} months ${days} days`;
    WD.textContent = `${(Math.ceil((years*12 + months)*30/7))} weeks ${days} days`;
    if(ageInYears <= 0)
    {
        headLine.textContent = "Invalid age!";
        headLine.classList.remove("headerline");
    }
    else
    {
        headLine.classList.remove("headerline");
        headLine.textContent = "age:";
        output.appendChild(YMD);
        output.appendChild(MD);
        output.appendChild(WD);

    }

});
month[0].addEventListener("click", ()=>{
    let monthselected = (month[0].options[month[0].selectedIndex]).value;
    let lastDay = (day[0].lastElementChild).value;
    if(monthselected == "9" || monthselected == "4" || monthselected == "6" || monthselected == "11")
    {
        if(lastDay == 31){
        day[0].removeChild(day[0].lastElementChild);
        }
        else if(lastDay == 29)
        {
            let newDay = document.createElement("option");
            newDay.text = 30;
            newDay.value = 30;
            day[0].appendChild(newDay);
        }
    }
    else if(monthselected == "1" || monthselected == "3" || monthselected == "5" || monthselected == "8" || monthselected == "7" || monthselected == "9" || monthselected == "10" || monthselected == "12")
    {
        if(lastDay == 30)
        {
            let newDay = document.createElement("option");
            newDay.text = 31;
            newDay.value = 31;
            day[0].appendChild(newDay);
        }
        else if(lastDay == 29)
        {
            let newDay = document.createElement("option");
            let newDay1 = document.createElement("option");
            newDay.text = 30;
            newDay.value = 30;
            newDay1.text = 31;
            newDay1.value = 31;
            day[0].appendChild(newDay);
            day[0].appendChild(newDay1);
        }
    }
    else
    {
        if(lastDay == 30)
        {
        day[0].removeChild(day[0].lastElementChild);
        }
        else if(lastDay == 31)
        {
        day[0].removeChild(day[0].lastElementChild);
        day[0].removeChild(day[0].lastElementChild);
        }
    }
});
month[1].addEventListener("click", ()=>{
    let monthselected = (month[1].options[month[1].selectedIndex]).value;
    let lastDay = (day[1].lastElementChild).value;
    if(monthselected == "9" || monthselected == "4" || monthselected == "6" || monthselected == "11")
    {
        if(lastDay == 31){
        day[1].removeChild(day[1].lastElementChild);
        }
        else if(lastDay == 29)
        {
            let newDay = document.createElement("option");
            newDay.text = 30;
            newDay.value = 30;
            day[0].appendChild(newDay);
        }
    }
    else if(monthselected == "1" || monthselected == "3" || monthselected == "5" || monthselected == "8" || monthselected == "7" || monthselected == "9" || monthselected == "10" || monthselected == "12")
    {
        if(lastDay == 30)
        {
            let newDay = document.createElement("option");
            newDay.text = 31;
            newDay.value = 31;
            day[0].appendChild(newDay);
        }
        else if(lastDay == 29)
        {
            let newDay = document.createElement("option");
            let newDay1 = document.createElement("option");
            newDay.text = 30;
            newDay.value = 30;
            newDay1.text = 31;
            newDay1.value = 31;
            day[1].appendChild(newDay);
            day[1].appendChild(newDay1);
        }
    }
    else
    {
        if(lastDay == 30)
        {
        day[1].removeChild(day[1].lastElementChild);
        }
        else if(lastDay == 31)
        {
        day[1].removeChild(day[1].lastElementChild);
        day[1].removeChild(day[1].lastElementChild);
        }
    }
});
