import React from 'react';
import axios from 'axios';
import react from 'react';
import {Link} from 'react-router-dom';

class DisplayFlights extends React.Component {

    state = {
        flightData:[]
    }

    componentWillMount() {
        axios.get("/flightServices/flights?from="+this.props.match.params.from+
        "&to="+this.props.match.params.to+"&departureDate="+this.props.match.params.departureDate).then(
            res=>{
                const flightData = res.data;
                this.setState({flightData: JSON});
                console.log(flightData);
            }
        )
    }

    render() {
        return (<div>
            <h2>Flights list for today</h2>
            <table>
                <thead>
                    <th> Airline </th>
                    <th> Departure_City </th>
                    <th> Arrival_City </th>
                    <th> Departure_Time_And_Date </th>
                </thead>
                <tbody>
                    {this.state.flightData.map(flight=><RowCreator item={flight}/>)}
                </tbody>
            </table>
        </div>);
    }
}


class RowCreator extends React.Component {
render() {
    var flight=this.props.item;
    return <tr>
        <td> {flight.operatingAirlines} </td>
        <td> {flight.departureCity} </td>
        <td> {flight.arrivalCity}</td>
        <td> {flight.estimatedDepartureTime} </td>
        <td> <Link to={'/passengerDetails/'+flight.id}>Select</Link></td>
    </tr>
}
}


export default DisplayFlights;