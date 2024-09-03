const Apikey = "2d00f1e7e2958713ab79d77de9039598";
const Apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchbox = document.querySelector(".search input");
  const searchbtn = document.querySelector(".search button");
 const weatherIcon=document.querySelector('.weather-icon')
async function fetchdata(city) {
  const response = await fetch(Apiurl + city +`&appid=${Apikey}`);
  if(response.status == 404){
  document.querySelector(".error").style.display="block"
  document.querySelector('.weather').style.display='none'
  }else{
    const data = await response.json();
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".percentage").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + " km/h";
  
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = '/wheater app/images/clouds.png';
    } else  if(data.weather[0].main == "Clear"){
      weatherIcon.src='/wheater app/images/clear.png'
    } else  if(data.weather[0].main == "Drizzle"){
      weatherIcon.src='/wheater app/images/drizzle.png'
    } else  if(data.weather[0].main == "Rain"){
      weatherIcon.src='/wheater app/images/rain.png'
    } else  if(data.weather[0].main == "Snow"){
      weatherIcon.src='/wheater app/images/snow.png'
    } else  if(data.weather[0].main == "Mist"){
      weatherIcon.src='/wheater app/images/mist.png'
    }  
  }
 
}
searchbtn.addEventListener("click", () => {
  document.querySelector('.weather').style.display='block'
document.querySelector(".error").style.display="none"
  fetchdata(searchbox.value);
});