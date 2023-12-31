const SearchButton = document.querySelector("#search-button");
const SearchField = document.querySelector(".input-box");
let WeatherICon = document.querySelector(".WeatherIcon");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".description"); 
const container = document.querySelector(".container");
const WeatherCard = document.querySelector(".weather-card");
const details = document.querySelector(".details");



SearchButton.addEventListener("click",()=>{
    const City = SearchField.value;

    if(City === ''){
        return;
    }

    const APIkey = '417cab5f10777ccb4ffdc5e15bcceb9c';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=${APIkey}`).then(response => response.json()).then(response=>{

        container.style.height = "600px";
        WeatherCard.classList.add("fadeIn");

        if(response.cod == 404){
            WeatherICon.src="Icons/404NotFound.png";
            description.innerText = "Location not Found!";
            details.style.display="none";
            return;
        }


        switch (response.weather[0].main){
            case 'Clear' :
            WeatherICon.src="Icons/Sunny.svg";
            break;            
            case 'Rain' :
            WeatherICon.src="Icons/Rain.svg";
            break;
            case 'Snow' :
            WeatherICon.src="Icons/Snowy.svg";
            break;            
            case 'Clouds' :
            WeatherICon.src="Icons/Cloudy.svg";
            break;            
            case 'Haze' :
            WeatherICon.src="Icons/Thunder.svg";
            break;            
            default:
            WeatherICon.src="";
        }

        details.style.display="flex";
        description.innerText=response.weather[0].description;
        temperature.innerHTML=`${parseInt(response.main.temp)}<span>°C</span>`
        document.querySelector(".humidity span").innerText = `${response.main.humidity} Humidity`
        document.querySelector(".windSpeed span").innerText = `${response.wind.speed} Wind Speed`
    })
})
SearchField.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        SearchButton.click();
    }
})


