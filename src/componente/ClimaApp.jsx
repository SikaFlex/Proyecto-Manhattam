import { useState } from 'react'
import '../styles/style.css'

export const ClimaApp = () => {
    const API_KEY = 'aaedc9e843036dc920190191cc6f2347';
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)

    const handleCambioCiudad = (event) => {
        setCiudad(event.target.value)

    }

    const fetchClima = async (city) => {

        const ciudad = city.toLowerCase();
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`);
            const data = await response.json();
            setDataClima(data)
        } catch (error) {
            console.error('Hubo este ERROR: ' + error)
        }


    }
    const handleSubmit = (event, API_KEY) => {
        event.preventDefault();
        if (ciudad.length > 0) fetchClima(ciudad);

    }


    return (
        <div className='container'>
            <h1>Aplicacion de clima</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                 dataClima && (

                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: <b>{(parseInt(dataClima?.main?.temp) - 273)}ºC</b></p>
                        <p>Humedad: <b>{dataClima?.main?.humidity}%</b></p>
                        {dataClima.weather ? <img style={{ width: 100, height: 100 }} src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" /> : <p>No se ha econtrado tu ciudad...</p>}
                    </div>

                )
            }
        </div>
    )

}
