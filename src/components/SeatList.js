import React, { Component } from "react";
import { connect } from "react-redux";
import Seat from "./Seat";

export class SeatList extends Component {
  render() {
    const { seats } = this.props;
    return (
      <div>
        {seats.map((item) => {
          return (
            <div
              key={item.hang}
              className="d-flex align-items-center justify-content-center mb-4"
            >
              <div className="fw-bold text-light" style={{ width: 30 }}>
                {item.hang}
              </div>
              <div className="d-flex gap-2 align-items-center ">
                {item.danhSachGhe.map((seat) => {
                  return (
                    <div key={seat.soGhe}>
                      <Seat item={seat} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seats: state.seat.seats,
  };
};

export default connect(mapStateToProps)(SeatList);
