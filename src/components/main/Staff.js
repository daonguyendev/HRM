import React from "react";
import Card from "../common/Card";
import Navbar from "../common/Navbar";
import Table from "../common/Table";

function Staff() {
  return (
    <>
      <div className="main-content">
        <Navbar />

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-12 col-xl">
              <span> Tổng 20 nhân sự</span>
            </div>
            <div className="col-auto">
              <button className="btn btn-danger">Thêm nhân sự</button>
            </div>{" "}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Staff;
