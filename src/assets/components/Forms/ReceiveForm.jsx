import React from "react";
import Button from "../Button/button";

function ReceiveForm() {
  return (
    // <span className="forms-wrapper">
    <>
      <h2>Receive Transaction</h2>
      <form>
        <input type="text" placeholder="Enter Wallet" required />
        <input
          type="number"
          className="no-spinner"
          placeholder="Amount (₳)"
          required
        />
        <Button>Receive</Button>
      </form>
    </>
    // </span>
  );
}

export default ReceiveForm;
