import React from "react";
import "./style.css";

import { Btn } from "../../compenent/btn";

export default function index() {
  return (
    <>
      <div className="box">
        <h1>user profile</h1>

        <Btn btnText="Delete" />
        <Btn btnText="Submit" />
      </div>
    </>
  );
}
