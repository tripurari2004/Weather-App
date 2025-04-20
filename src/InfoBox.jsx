import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function InfoBox({ data }) {

    const getImage = (condition) => {
        if (condition.includes('cloud')) return 'https://images.unsplash.com/photo-1569428034239-f9565e32e224?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        if (condition.includes('rain')) return 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        if (condition.includes('snow')) return 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        if (condition.includes('sun') || condition.includes('clear')) return 'https://plus.unsplash.com/premium_photo-1676320526001-07b75bd19ae3?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        if (condition.includes('storm') || condition.includes('thunder')) return 'https://images.unsplash.com/photo-1582138547236-863b8ad8a6ba?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        return 'https://plus.unsplash.com/premium_photo-1664304423623-4f9d5ed90b4f?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // default
    }


    const imgUrl = getImage(data.weather)

    let info = {
        city: data.city,
        temp: data.temp,
        tempMin: data.tempMin,
        tempMax: data.tempMax,
        humidity: data.humidity,
        feelslike: data.feelslike,
        weather: data.weather
    }

    return (
        <div className='d-flex justify-content-center mt-3'>
            <Card sx={{ width: '100%', maxWidth: 350 }}>
                <CardMedia
                    sx={{ height: 250 }}
                    image={imgUrl}
                    title="green iguana"
                    className='font'
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
                        <div>🌡️ Right now, it's <strong>{info.temp}°C</strong> in {info.city}.</div>
                        <div className='mt-3'>💦 The air's got <strong>{info.humidity}%</strong> humidity — kinda sticky, huh?</div>
                        <div className='mt-3'>🌄 Temps range from <strong>{info.tempMin}°C</strong> to <strong>{info.tempMax}°C</strong> today.</div>
                        <div className='mt-3'>🌈 The skies whisper "<em>{info.weather}</em>", and it feels like <strong>{info.feelslike}°C</strong>.</div>

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
