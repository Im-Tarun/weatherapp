// focus effect 

let searchmain = document.getElementById("searchmain")
let searchbox = document.getElementById("searchbox")
let bxout = document.getElementById("bx-out")

searchbox.addEventListener("focus",() => {
    searchmain.style.outline = " 2px solid white"
    searchmain.style.border = " 2px solid rgb(69 69 69)"
    bxout.style.border = "none"
})
searchbox.addEventListener("blur",() => {
    searchmain.style.outline = " none"
    searchmain.style.border = " none"
    // bxout.style.border = "1px solid rgb(162, 162, 162)"

})

// Setting Time  
const allmonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let displaytime = document.getElementById("time")
displaytime.style.color = "black"


setInterval(() => {
    let date_time = new Date()
    let month = date_time.getMonth()
    let date = date_time.getDate()
    let hour = date_time.getHours()
    let minutes = date_time.getMinutes()
    
    if(hour > 12){
        newhour = (hour - 12)
        am_pm = 'PM'
        
    }
    else if(hour == 12){
        newhour = hour
        am_pm = "PM"
    }
    else if (hour == 0){
        newhour = 12
        am_pm = "AM"
    }
    else{
        newhour = hour
        am_pm = "AM"
    }

    displaytime.innerHTML = (date + " " + allmonths[month] +", " + newhour +":" + minutes + " " + am_pm)
    
}, 4000);



// Working
const apikey = "c5b9742a07fad5d0285adc034bd30640"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox_input = document.getElementById("searchbox")
const searchbtn = document.getElementById("bx-out")
const weatherimage = document.getElementById("weather-image")

async function checkwether(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    console.log(data) ; 
    document.getElementById("cityname").innerHTML = data.name; 
    document.getElementById("tempreture").innerHTML = Math.round(data.main.temp) + " °C";
    document.getElementById("box1").innerHTML = data.weather[0].main; 
    document.getElementById("box2").innerHTML = "Ps: "  + Math.round(data.main.pressure) + " hPa"  ; 
    document.getElementById("humidper").innerHTML = data.main.humidity + "%"; 
    document.getElementById("windkm").innerHTML = data.wind.speed + " M/s"; 

    if(data.weather[0].main == "Haze"){
        weatherimage.src = "./js-images/haze.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherimage.src = "./js-images/rain.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherimage.src = "./js-images/clear.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherimage.src = "./js-images/mist.png"
    }
    else if (data.weather[0].main == "Snow"){
        weatherimage.src = "./js-images/snow.png"
    }
    else if (data.weather[0].main == "Thunderstrom"){
        weatherimage.src = "./js-images/thunderstrom.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherimage.src = "./js-images/drizzle.png"
    }
    else if (data.weather[0].main == "Clouds"){
        weatherimage.src = "./js-images/clouds.png"
    }
    else{
    weatherimage.innerHTML = data.weather[0].main
    }

    document.getElementById("invisible").style.display = "block"

    
}

searchbtn.addEventListener("click", ()=> {
    checkwether(searchbox_input.value)
})

// searchbox_input.addEventListener("keydown",function(a){
//     if(a.code === "Enter"){
//         checkwether(searchbox_input.value)
//     }
// })

searchbox_input.addEventListener("keypress",function(a){
    if(a.code === "Enter"){
        checkwether(searchbox_input.value)
        console.log("yes")
    }
})


