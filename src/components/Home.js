import React, { Component } from "react";
import Result from "./Result";
import SeatList from "./SeatList";
import bg from "../assets/img/bgmovie.jpg";

export class Home extends Component {
  render() {
    return (
      <div
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="container py-5 px-3"
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          <div className="text-center text-light fw-bold display-6 p-3 mb-5 bg-warning justify-content-center d-flex align-items-center">
            <h2>ONLINE TICKET BOOKING</h2>
          </div>
          <div className="row">
            <div className="col-8">
              <h2 className="text-center bg-dark text-light py-2 mb-5 border-light border">
                Screen
              </h2>
              <SeatList />
            </div>
            <div className="col-4">
              <Result />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

/**
1. Tạo components, reducer
2. Dàn layout 
3. Chức năng:
    3.1: Đổi màu ghế đã book
    3.2: Ấn vào ghế chưa book -> đổi màu
    3.3: Hiện ghế đang booking ra result
    3.4: Ấn thanh toán -> ghế đang book thành đã book -> clear result
 */
