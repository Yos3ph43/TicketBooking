import clsx from "clsx";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./seat.css";

export class SeatBooking extends Component {
  render() {
    const { item, bookingSeats, handleBookingSeat } = this.props;
    return (
      <button
        className={clsx("seat", {
          booked: item.daDat,
          booking: bookingSeats.find((seat) => seat.soGhe === item.soGhe),
        })}
        disabled={item.daDat}
        onClick={() => {
          handleBookingSeat(item);
        }}
      >
        {item.soGhe}
      </button>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    bookingSeats: state.seat.bookingSeats,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleBookingSeat: (seat) => {
      dispatch({
        type: "BOOK_SEAT",
        payload: seat,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatBooking);
