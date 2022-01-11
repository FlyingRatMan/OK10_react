import {useEffect, useState} from "react";

const Flights = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(result => result.json())
            .then(flights => {
                let flight = flights.filter(flight => flight.launch_year !== '2020');
                setFlights(flight);
            })
    })

    return (
        <div>
            {flights.map(flight => <div key={flight.flight_number}>
                <h2>{flight.mission_name} - {flight.launch_year}</h2>
                <img src={flight.links.mission_patch_small} alt="img"/>
            </div>)}
        </div>
    );
}

export default Flights;