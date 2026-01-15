const apiKey = "33044e51ba825ac08921b69cafe0185d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    if(data.cod==404){
        alert("Geçerli Bir Şehir Giriniz")
        searchBox.value = "";
        return;
    }



    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) +"°c";  // math.round aşagi veriyi asagi veya yukarı yuvarlar (nereye yakin ise )
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent =  data.wind.speed + "km/h"  ;
    

    //hava durumuna göre ön yüz e image basiyoruz
    //? eğer datanin icindeki weatherin 0. indexi maini eşitse, Clouds global weather icon degiskeninin imageini degistir
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    
    else if(data.weather[0].main == "Mist"){
    weatherIcon.src ="images/mist.png"
    }
    
    else if(data.weather[0].main == "Rain"){
    weatherIcon.src ="images/rain.png"
    }

    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }

    else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png"
    }

    document.querySelector(".weather").style.display="block";

    searchBox.value = "";
}

searchBtn.addEventListener("click" ,()=>{
checkWeather(searchBox.value);
})




/*  

1- const api key tanimla 
2- const api url i ver 
3- async function ac , cevap alabilecegin degisken tanimla ve await ile kontrolden sonra fetch et
4- dönen responseyi bir degisken icine koy await ile bekle ve json() formatina cevir

*/









