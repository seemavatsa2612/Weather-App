// APIKYE = '653d170a6bbe466fb0735337241907';


// API = `http://api.weatherapi.com/v1/current.json?key=653d170a6bbe466fb0735337241907&q=London&aqi=yes`

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd32a3fd8b1mshef8568111b1d6dcp1d8b52jsn3acaa26ac00f',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};


// referencing output fields
const cityName = document.getElementById('city-name');
const countryName = document.getElementById('countryName')
const localTime= document.getElementById('loc-time');
const temp = document.getElementById('temp')
const sup = document.getElementById('sup')
const cond = document.getElementById('cond')
const icon = document.querySelector('img')


async function getData(cityName,options){
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?&q=${cityName}&aqi=yes`, options);
        return await response.json();
    } catch (error) {
        console.error(error);
    }  
}

searchBtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('outputCard').style.visibility ='visible';
    const result = await getData(input,options);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    cond.innerText = `${result.current.condition.text}`
    icon.src = `${result.current.condition.icon}`
    localTime.innerText = `${result.location.localtime}`;
    

})

