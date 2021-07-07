window.addEventListener('load', function(){
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let submit = document.querySelector('.submit');
    let input = document.querySelector('.searchbar');

    // const proxy = 'https://cors-anywhere.herokuapp.com/';
    submit.addEventListener('click', function(){

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=c3e29150b93583a26be45eba04c56f74`;
    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data =>{
        console.log(data);
        const nameValue = data.name;
        const tempValue = data.main.temp;
        const descValue = data.weather[0].description;

        locationTimezone.innerHTML = nameValue;
        temperatureDegree.innerHTML = Math.floor((tempValue-273.15)*1.8)+32;
        temperatureDescription.innerHTML = descValue;
        }); 
    });
});
