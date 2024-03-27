//34acc9ed6bac3b07a16eb3e8675483fb
// 34acc9ed6bac3b07a16eb3e8675483fb
// https://api.openweathermap.org/data/2.5/weather?&units=metric&q=habiganj&appid=34acc9ed6bac3b07a16eb3e8675483fb

let key = "34acc9ed6bac3b07a16eb3e8675483fb";
let url = "https:api.openweathermap.org/data/2.5/weather?&units=metric&q="

const temp = document.querySelector(".temp");
let inputBox = document.getElementById("inputBox");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.querySelector(".city");
let icon = document.querySelector(".weather-icon")

async function getData(city="habiganj"){
    const response = await fetch(url +city +`&appid=${key}`);
    if(response.status > 200){
        alert("Enter youe city");
    }else{
        
    const data = await response.json();
    temp.innerHTML = parseInt(data.main.temp) + "°c";
    cityName.innerHTML = data.name ;

    console.log(data)
    if(data.weather[0].main =="Clear"){
        icon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png"
    } else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png"
    }else if(data.weather[0].main == "Drizzle"){
    icon.src = "images/drizzle.png"

    }
    else if(data.weather[0].main == "Snow"){
        icon.src = "images/snow.png"

    }
    inputBox.value = ""

    }
}
searchBtn.addEventListener("click",function(){
    getData(inputBox.value);
})
document.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        getData(inputBox.value)
    }
})