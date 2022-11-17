import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
  render() {
    const { bookingSeats, handleCancelSeat, handlePayment } = this.props;
    console.log(bookingSeats);
    return (
      <div className="text-light">
        <h2 className="mb-3">Your Booking Seats:</h2>
        <div className="border-top border-bottom pt-3">
          <p>
            <button className="btn btn-danger p-3"></button> Already Booked
          </p>
          <p>
            <button className="btn btn-success p-3"></button> Your booking seats
          </p>
          <p>
            <button className="btn btn-light border-dark p-3"></button>{" "}
            Available seats
          </p>
        </div>
        <table className="table text-light">
          <thead>
            <tr>
              <th>Số Ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>

          <tbody>
            {bookingSeats.map((item) => (
              <tr key={item.soGhe}>
                <td>{item.soGhe}</td>
                <td>{item.gia.toLocaleString()}</td>
                <td>
                  <button
                    className="btn border btn-danger"
                    onClick={() => {
                      handleCancelSeat(item);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="fs-5">
          Tổng cộng:{" "}
          {bookingSeats
            .reduce((total, item) => {
              return (total += item.gia);
            }, 0)
            .toLocaleString()}
        </p>
        <button className="btn btn-success" onClick={handlePayment}>
          Thanh toán
        </button>
      </div>
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
    handleCancelSeat: (item) => {
      dispatch({
        type: "BOOK_SEAT",
        payload: item,
      });
    },
    handlePayment: () => {
      dispatch({
        type: "PAYMENT",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
