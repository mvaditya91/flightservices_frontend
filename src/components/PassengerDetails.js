import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component {

    state ={}

    componentWillMount() {
        axios.get("/flightServices/flights/"+this.props.match.params.flightId)
        .then(res=>{
            const passengerData = res.data;
            this.setState({passengerData: [...JSON]});
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const data = {
            flightId: this.props.match.params.flightId,
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            email: this.email,
            phoneNumber:this.phoneNumber
        }
        axios.post("/flightServices/reservations",data).
        then(res=>{
            this.props.history.push('/confirmReservation/'+res.data.id)
        })
    }

    render() {
        return (
            <div>
                <h2> Confirm Reservation </h2>
                <h2> Flight Details </h2>
                Airline: {this.state.operatingAirlines} <br/>
                From: {this.state.departureCity} <br/>
                To: {this.state.arrivalCity} <br/>
                Departure Date: {this.state.dateOfDeparture}
                <h2> Passenger Information </h2> <br/>
                <form>
                     First Name: <input type="text" name="firstName" onChange={(event)=>{this.firstName=event.target.value}}/> <br/><br/>
                     Last Name:  <input type="text" name="lastName" onChange={(event)=>{this.lastName=event.target.value}}/> <br/><br/>
                     Middle Name: <input type="text" name="middleName" onChange={(event)=>{this.middleName=event.target.value}}/> <br/><br/>
                     Email: <input type="text" name="email" onChange={(event)=>{this.email=event.target.value}}/> <br/><br/>
                     Phone: <input type="text" name="phoneNumber" onChange={(event)=>{this.phoneNumber=event.target.value}}/> <br/> <br/>
                     <h2> Payment Information </h2>
                     Debit/Credit Card Number: <input type="text" name="cardNumber" onChange={(event)=>{this.cardNumber=event.target.value}}/> <br/> <br/>
                     Card Exp Date: <input type="text" name="expDate" onChange={(event)=>{this.expDate=event.target.value}}/> <br/><br/>
                     Security Code: <input type="text" name="secCode" onChange={(event)=>{this.secCode=event.target.value}}/> <br/><br/>
                     <button onClick={this.onSubmit.bind(this)}>Confirm Reservation</button> <br/><br/>
                </form>
            </div>
        );
    }
}
export default PassengerDetails;