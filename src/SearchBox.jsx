import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css'
import InfoBox from './InfoBox';

export default function SearchBox() {

    const API_URL = `https://api.openweathermap.org/data/2.5/weather`
    const API_KEY = `c0f1601711217b9726baeb81b6e2c01f`

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)

    function handleChange(e) {
        setCity(e.target.value)
    }

    async function getWeather() {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let result = await response.json()
        console.log(result)
        let data = {
            city: result.name,
            temp: result.main.temp,
            tempMin: result.main.temp_min,
            tempMax: result.main.temp_max,
            humidity: result.main.humidity,
            feelslike: result.main.feels_like,
            weather: result.weather[0].description
        }
        setWeather(data)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setCity("")
        getWeather()
    }



    return (
        <div className='searchbox'>
            <p className="badge text-bg-primary fs-3 mt-3">Weather App by Treta</p>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" name='city' value={city} onChange={handleChange} required
                    sx={{
                        input: { color: 'white' },                
                        label: { color: 'white' },                
                        '& label.Mui-focused': { color: '#90caf9' }, 
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'white' },     
                            '&:hover fieldset': { borderColor: '#90caf9' }, 
                            '&.Mui-focused fieldset': { borderColor: '#90caf9' },
                        },
                    }}
                /><br /><br />
                <Button type='submit' variant="contained" endIcon={<SendIcon />}>Search</Button>
                {weather && <InfoBox data={weather} />}
            </form>
        </div>
    )
}
