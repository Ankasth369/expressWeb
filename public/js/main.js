const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
// const datahide = document.querySelector('middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value ;
    if (cityVal == "") {
        city_name.innerText = `Please enter the city name`;
        // datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9e1901156772d514b432d2417011e902`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerHTML =  `<span>${arrData[0].main.temp}</span><sup>o</sup>C`;
            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            }
            // datahide.classList.remove('data_hide');
            

        } catch {
            city_name.innerText = `Please enter the city name properly`;
            // datahide.classList.add('data_hide');
            
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);