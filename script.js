const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f5b772f945msh424ad5119e30df0p1c5877jsn8aa1f88104e0",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= "+city , options)
  		.then((response) => response.json())
  		.then((response) => {
    		console.log(response);
    		cloud_pct.innerHTML = response.cloud_pct
    		temp.innerHTML = response.temp
    		feels_like.innerHTML = response.feels_like
    		humidity.innerHTML = response.humidity
    		
    		max_temp.innerHTML = response.max_temp
    		wind_speed.innerHTML = response.wind_speed
    		wind_degrees.innerHTML = response.wind_degrees
  		})
  		.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Rajkot")