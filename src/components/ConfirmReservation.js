import React from 'react';

class ConfirmReservation extends React.Component {
    render() {
        return (
            <div>
                <h2> Reservation Complete </h2> <br/><br/>
                <h2> Confirmation Code {this.props.match.params.reservationId}</h2>
            </div>
        );
    }
}
export default ConfirmReservation;